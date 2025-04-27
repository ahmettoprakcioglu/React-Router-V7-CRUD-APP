import { supabase } from "~/supabase-client";

import { Form, redirect, type ActionFunctionArgs, useNavigation } from "react-router";
import type { Route } from "./+types/item";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Edit Item ${params.id} | RRV7 Crud` },
    {
      name: "description",
      content: "Edit or delete an item using our Supabase CRUD app.",
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const { id } = params;

  if (!id) {
    return { error: "No item found." };
  }

  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return { error: error.message };
  }

  return { item: data };
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const intent = formData.get("intent");

  if (intent === "delete") {
    const { error } = await supabase.from("items").delete().eq("id", params.id);
    if (error) {
      return { error: error.message };
    }
    return redirect("/");
  } else if (intent === "update") {
    const { error } = await supabase
      .from("items")
      .update({ title, description })
      .eq("id", params.id);
    if (error) {
      return { error: error.message };
    }
    return { updated: true };
  }

  return {};
}

export default function Item({ loaderData, actionData }: Route.ComponentProps) {
  const { item, error } = loaderData;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formData = navigation.formData;
  const isUpdating = isSubmitting && formData?.get("intent") === "update";
  const isDeleting = isSubmitting && formData?.get("intent") === "delete";

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Item</h2>
      {actionData?.error && (
        <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">
          {actionData.error}
        </div>
      )}
      {actionData?.updated && (
        <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">
          Item updated successfully!
        </div>
      )}
      <Form method="post" className="space-y-4 bg-white p-4 rounded shadow">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            name="title"
            type="text"
            defaultValue={item.title}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Content</label>
          <textarea
            name="description"
            defaultValue={item.description}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            name="intent"
            value="update"
            disabled={isSubmitting}
            className={`${
              isUpdating ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-500'
            } text-white px-4 py-2 rounded disabled:cursor-not-allowed flex items-center justify-center gap-2`}
          >
            {isUpdating && (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
            )}
            {isUpdating ? 'Updating...' : 'Update'}
          </button>
          <button
            type="submit"
            name="intent"
            value="delete"
            disabled={isSubmitting}
            className={`${
              isDeleting ? 'bg-red-400' : 'bg-red-600 hover:bg-red-500'
            } text-white px-4 py-2 rounded disabled:cursor-not-allowed flex items-center justify-center gap-2`}
          >
            {isDeleting && (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
            )}
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </Form>
    </div>
  );
}