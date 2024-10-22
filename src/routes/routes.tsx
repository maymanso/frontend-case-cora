import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import TodoList from "../Pages/TodoList/TodoList";
import IBanking from "../Pages/IBanking/IBanking";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./private.routes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'todo-list',
    element: <TodoList />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '/ibanking',
    element: <PrivateRoutes />,
    children: [{
      path: '',
      element: < IBanking />
    }]
  }
]);

export const Routes = () => (<RouterProvider router={router} />);