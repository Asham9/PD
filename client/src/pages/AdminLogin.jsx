import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    const { data } = await customFetch.post('/auth/admin', credentials);
    toast.success(data.message || 'Login successful');
    return redirect('/admin-dashboard');
  } catch (error) {
    const message = error?.response?.data?.message || 'Unable to sign in. Please try again.';
    toast.error(message);
    return null;
  }
};

const AdminLogin = () => {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-gradient-to-tr from-[#fbfaf8] to-[#fff7f0] px-4 py-16">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl sm:p-12">
        <h1 className="text-center text-3xl font-extrabold text-gray-800 sm:text-4xl">Admin login</h1>
        <p className="mt-2 text-center text-sm text-slate-600">
          Use the seeded credentials <span className="font-semibold text-orange-600">admin@aisolutions.com</span> /{' '}
          <span className="font-semibold text-orange-600">secret123</span> to explore the dashboard.
        </p>

        <Form method="post" className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-xl border border-gray-300 px-5 py-3 text-sm shadow-sm focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-2 w-full rounded-xl border border-gray-300 px-5 py-3 text-sm shadow-sm focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 text-lg font-semibold text-white transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Log in
          </button>
        </Form>
      </div>
    </section>
  );
};

export default AdminLogin;
