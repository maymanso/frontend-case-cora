import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { IBanking } from "../Pages/IBanking";
import Todo from "../Pages/Todo";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'iBank',
    element: <IBanking />
  },
  {
    path: 'todo',
    element: <Todo />
  }
]);

export const Routes = () => (<RouterProvider router={router} />);