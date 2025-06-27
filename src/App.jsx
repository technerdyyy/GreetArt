import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/Landing";
import Categories from "./pages/Categories";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
