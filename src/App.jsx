// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import CategoryLayout from "./layout/category-layout";
import Landing from "./pages/Landing";
import Categories from "./pages/Categories";
import TemplateGallery from "./pages/TemplateGallery";
import EditTemplate from "./pages/EditTemplate";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Landing /> },
      {
        path: "/categories",
        element: <CategoryLayout />,
        children: [
          { index: true, element: <Categories /> }, // main explorer
          { path: ":category", element: <TemplateGallery /> }, // dynamic route!
        ],
      },
      {
        path: "/edit/:category/:templateId",
        element: <EditTemplate />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
