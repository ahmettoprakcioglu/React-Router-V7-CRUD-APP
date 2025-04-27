import { Form, redirect, type ActionFunctionArgs, useNavigation } from "react-router"
import { supabase } from "~/supabase-client";

export const meta = () => {
  return [
    {
      title: 'New Item | RRV7 Crud'
    }, {
      name: 'description',
      content: 'Create a new item using our Supabase CRUD app.'
    }
  ]
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const title = await formData.get('title') as string;
  const description = await formData.get('description') as string;

  if (!title || !description) {
    return {
      error: 'Title and description are required'
    }
  }

  const { error } = await supabase.from('items').insert({ title, description });

  if (error) {
    return { error: error?.message }
  }

  return redirect('/')
}

const NewItem = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Item</h2>
      <Form method="post" className="space-y-4 bg-white p-4 rounded shadow">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            name="title"
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Content</label>
          <textarea
            name="description"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${
            isSubmitting ? 'bg-green-400' : 'bg-green-600 hover:bg-green-500'
          } text-white px-4 py-2 rounded cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2`}
        >
          {isSubmitting && (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
          )}
          {isSubmitting ? 'Creating...' : 'Create Item'}
        </button>
      </Form>
    </div>
  )
}

export default NewItem
