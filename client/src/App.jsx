import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
  HomeLayout, 
  Register, 
  Login, 
  Landing, 
  Error,
  AdminLogin,
  AdminDashboard
} from "./pages";


import {action as AdminLoginAction} from './pages/AdminLogin'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path:'/admin',
    element: <AdminLogin />,
    action:AdminLoginAction
  },
  {
    path:'/admin-dashboard',
    element: <AdminDashboard />,
    
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
