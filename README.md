# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Project Structure](#project-structure)
6. [Development](#development)

## 🚀 Introduction

This is a modern CRUD (Create, Read, Update, Delete) application built with React Router V7 and Supabase. The application demonstrates how to implement a full-featured todo management system using the latest web technologies. It showcases the power of React Router V7's configuration-based routing combined with Supabase's real-time database capabilities, all wrapped in a beautiful, responsive UI built with Tailwind CSS.

## ⚙️ Tech Stack

- **React 19** – Latest version of React for building the user interface
- **React Router V7** – For advanced routing and data management
- **Supabase** – Backend as a Service (BaaS) for database and authentication
- **TypeScript** – For type safety and better developer experience
- **Tailwind CSS 4** – For utility-first styling
- **Vite** – Next generation frontend tooling
- **Docker** – For containerization and easy deployment

## ⚡️ Features

- **CRUD Operations:**  
  Complete todo management with create, read, update, and delete functionality.
  
- **Modern Routing:**  
  Utilizes React Router V7's latest features for efficient routing and data handling.

- **Real-time Updates:**  
  Integration with Supabase for real-time data synchronization.

- **Type Safety:**  
  Full TypeScript implementation for robust type checking.

- **Responsive Design:**  
  Mobile-first approach with Tailwind CSS for a beautiful UI across all devices.

- **Containerized:**  
  Docker support for consistent development and deployment environments.

## 👌 Quick Start

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn
- Docker (optional)
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmettoprakcioglu/React-Router-V7-CRUD-APP.git
   cd React-Router-V7-CRUD-APP
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file based on `.env.example`
   - Add your Supabase credentials

4. Start the development server:
   ```bash
   npm run dev
   ```

### Docker Setup

```bash
# Build the container
docker build -t react-router-crud .

# Run the container
docker run -p 3000:3000 react-router-crud
```

## 🗂 Project Structure

```
├── app/
│   ├── components/     # Reusable UI components
│   ├── routes/        # Route components and logic
│   ├── root.tsx       # Root component
│   └── supabase-client.ts # Supabase configuration
├── public/            # Static assets
├── .react-router/     # Router configuration
├── react-router.config.ts # Router setup
└── vite.config.ts    # Vite configuration
```

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run type checking

### Type Safety

The project uses TypeScript for type safety. Run type checking with:
```bash
npm run typecheck
```

---

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
