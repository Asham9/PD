import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft } from 'react-icons/fa';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  teamSize: '1-10',
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password || !formData.name) {
      toast.error('Please complete all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    toast.success(`Welcome aboard, ${formData.name}! Check your inbox to confirm your account.`);
    setFormData(initialState);
  };

  const handleSocialClick = (provider) => {
    toast.info(`${provider} sign-in is coming soon. In the meantime, create an account with your email.`);
  };

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-[#fbfaf8] px-4 py-16">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl md:grid-cols-2">
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-semibold text-orange-600">Create your PulseDynamics account</h1>
          <p className="mt-2 text-sm text-slate-600">No credit card required. Upgrade or add teammates anytime.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-slate-800">
                Full name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-800">
                Work email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="password" className="text-sm font-semibold text-slate-800">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Create a password"
                  className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-800">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="Re-enter password"
                  className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="teamSize" className="text-sm font-semibold text-slate-800">
                Team size
              </label>
              <select
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Continue with email
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-sm text-slate-400">
            <span className="h-px flex-1 bg-orange-100" />
            OR
            <span className="h-px flex-1 bg-orange-100" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSocialClick('Google')}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-orange-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-orange-50"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialClick('Microsoft')}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-orange-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-orange-50"
            >
              <FaMicrosoft className="text-lg text-blue-700" />
              Continue with Microsoft
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-orange-600 hover:text-orange-500">
              Log in →
            </Link>
          </p>
        </div>

        <aside className="flex flex-col justify-between bg-orange-50 p-8 md:p-12">
          <div>
            <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600">
              Try Teams plan free
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              Explore premium features during your 14-day Teams plan trial
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>✔ Multi-team roadmaps with dependency tracking</li>
              <li>✔ Intelligent triage for customer requests</li>
              <li>✔ Meeting insights, reminders, and summaries</li>
              <li>✔ Integrations with Jira, Linear, Slack, and HubSpot</li>
              <li>✔ Remove PulseDynamics branding</li>
            </ul>
          </div>
          <div className="mt-8 text-xs uppercase tracking-widest text-orange-500">
            Trusted by teams at Horizon Retail, Elevate Cloud, NovaBank, and more.
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Register;
