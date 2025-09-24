import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please provide both an email and password.');
      return;
    }

    toast.success('Login successful. Redirecting to the home page.');
    setTimeout(() => navigate('/'), 800);
  };

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-orange-100 bg-white p-10 shadow-xl">
        <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in to access your workspace and stay in sync with your teams.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-slate-800">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-semibold text-slate-800">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Need an account?{' '}
          <Link to="/register" className="font-semibold text-orange-600 hover:text-orange-500">
            Create one now
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
