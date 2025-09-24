import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const quickLinks = [
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Resources', to: '/resources' },
];

const companyLinks = [
  { label: 'About', to: '/about-us' },
  { label: 'Contact', to: '/contact-us' },
  { label: 'Admin', to: '/admin' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (event) => {
    event.preventDefault();
    toast.success('Thanks for subscribing! We will keep you posted.');
    event.currentTarget.reset();
  };

  return (
    <footer className="mt-16 bg-[#0f172a] text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="max-w-md">
          <Link to="/" className="text-2xl font-semibold text-white">
            PulseDynamics
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            We help product teams orchestrate AI-driven experiences with clarity and confidence. Stay ahead of market shifts,
            accelerate delivery, and design customer journeys that feel personal at scale.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="transition hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="transition hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Stay in the loop</h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe for monthly insights on AI-powered product delivery trends, customer stories, and product tips.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-md border border-slate-600 bg-[#0b1220] px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-[#0b1220]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {currentYear} PulseDynamics. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-orange-400">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-orange-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
