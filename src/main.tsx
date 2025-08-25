
  import { createRoot } from "react-dom/client";
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import App from "./App.tsx";
  import BlogPostPage from "./pages/BlogPostPage";
  import "./index.css";

  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/blog/:slug", element: <BlogPostPage /> },
  ]);

  createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
  );
  