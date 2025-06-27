import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/Landing";
import Categories from "./pages/Categories";
import AnniversaryPage from "./pages/Anniversary";
import BirthdayPage from "./pages/Birthday";
import Thanks from "./pages/Thanks";
import QuotesPage from "./pages/Quotes";
import CategoriesLayout from "./layout/category-layout";
import CategoriesPage from "./pages/Categories";

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
        element: <CategoriesLayout />,
        children: [
          {
            index: true,
            element: <CategoriesPage />, // Shown at /categories
          },
          {
            path: "anniversary",
            element: <AnniversaryPage />,
          },
          {
            path: "birthday",
            element: <BirthdayPage />,
          },
          {
            path: "thankyou",
            element: <Thanks />,
          },
          {
            path: "quotes",
            element: <QuotesPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
