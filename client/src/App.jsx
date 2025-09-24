import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Register,
  Login,
  Landing,
  Error,
  AdminLogin,
  AdminDashboard,
  Products,
  Services,
  Solutions,
  Resources,
  AboutUs,
  ContactUs,
  Privacy,
  Terms,
  adminDashboardLoader,
} from './pages';
import { action as AdminLoginAction } from './pages/AdminLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'solutions',
        element: <Solutions />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'contact-us',
        element: <ContactUs />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLogin />,
    action: AdminLoginAction,
  },
  {
    path: '/admin-dashboard',
    element: <AdminDashboard />,
    loader: adminDashboardLoader,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
