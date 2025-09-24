import { useState } from 'react';
import { toast } from 'react-toastify';

const initialFormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please complete the required fields before submitting.');
      return;
    }

    toast.success('Thanks for reaching out! Our team will respond within one business day.');
    setFormData(initialFormState);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Contact our team</p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">We would love to understand your goals</h1>
          <p className="mt-4 text-base text-slate-600">
            Tell us about your product delivery challenges and we will schedule a strategy session with the right specialists.
            We typically respond within one business day.
          </p>
          <div className="mt-8 grid gap-6 text-sm text-slate-600">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">Email</p>
              <a href="mailto:hello@pulsedynamics.ai" className="text-orange-600">
                hello@pulsedynamics.ai
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">Office hours</p>
              <p>Monday to Friday — 8:30am to 6pm (GMT)</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">Locations</p>
              <p>London · Austin · Singapore</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-slate-800">
                Name*
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-800">
                Work email*
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
          </div>

          <div className="mt-6">
            <label htmlFor="company" className="text-sm font-semibold text-slate-800">
              Company
            </label>
            <input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder="Where do you work?"
              className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="text-sm font-semibold text-slate-800">
              How can we help?*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Share a bit about your goals or current challenges."
              className="mt-2 w-full rounded-md border border-orange-100 px-3 py-2 text-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Submit message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
