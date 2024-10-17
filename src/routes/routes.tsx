import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import TodoList from "../Pages/TodoList/TodoList";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'todo-list',
    element: <TodoList />
  }
]);

export const Routes = () => (<RouterProvider router={router} />);