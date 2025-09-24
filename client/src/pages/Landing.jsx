import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaCloud,
  FaHeadset,
  FaRobot,
  FaShieldAlt,
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const featureHighlights = [
  {
    title: 'Unified product intelligence',
    description:
      'Bring roadmap, experiment, and customer data into a single source of truth so teams can prioritise work with confidence.',
    icon: <FaChartLine className="text-2xl text-orange-500" />,
  },
  {
    title: 'Adaptive automation',
    description:
      'Automate repetitive operational tasks with AI copilots that learn how your team works and suggest optimised playbooks.',
    icon: <FaRobot className="text-2xl text-orange-500" />,
  },
  {
    title: 'Enterprise-grade governance',
    description:
      'Track usage, permissions, and compliance in real-time with built-in guardrails tailored to regulated industries.',
    icon: <FaShieldAlt className="text-2xl text-orange-500" />,
  },
];

const solutionTiles = [
  {
    title: 'Intelligent delivery operating system',
    copy:
      'Coordinate discovery, delivery, and growth experiments in one workspace. Keep every squad aligned to business outcomes.',
  },
  {
    title: 'Customer signal engine',
    copy:
      'Aggregate behaviour, feedback, and sentiment data to surface the highest impact initiatives and reduce churn.',
  },
  {
    title: 'AI governance console',
    copy: 'Manage model inventory, performance, and ethics reporting so teams can scale AI responsibly across the organisation.',
  },
];

const testimonials = [
  {
    quote:
      'PulseDynamics gives us a living blueprint of our product strategy. We deliver releases 40% faster while keeping risk tightly managed.',
    name: 'Maya Chen',
    role: 'VP of Product, Elevate Cloud',
  },
  {
    quote:
      'Our teams finally share the same context. Experiments, customer signals, and delivery plans stay perfectly in sync.',
    name: 'Julian Mehta',
    role: 'Chief Innovation Officer, Horizon Retail',
  },
];

const stats = [
  { label: 'Faster release cycles', value: '40%' },
  { label: 'Reduction in operational risk', value: '68%' },
  { label: 'Increase in customer retention', value: '22%' },
];

const industries = [
  'Financial services',
  'Healthcare',
  'SaaS & platforms',
  'Retail & ecommerce',
  'Industrial & IoT',
  'Public sector',
];

const Landing = () => {
  return (
    <div className="bg-[#fbfaf8] pb-20 text-gray-900">
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-16 pt-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="w-full space-y-6 lg:w-3/5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600 shadow">
              <HiSparkles className="text-base" />
              AI Product Delivery Platform
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Orchestrate intelligent product journeys at enterprise scale
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              PulseDynamics connects strategy, execution, and customer insight into a single workspace. Empower teams to build
              adaptive, AI-powered experiences that customers love.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Start your free trial
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center rounded-md border border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Explore solutions
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-xl border border-orange-100 bg-white/70 p-4 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-orange-600">{item.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <FaBolt className="text-xl" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-700">Operational overview</p>
                  <p className="text-xs text-slate-500">Live from the past 24 hours</p>
                </div>
              </div>
              <div className="mt-6 space-y-5">
                {featureHighlights.map((feature) => (
                  <div key={feature.title} className="rounded-xl border border-orange-50 bg-orange-50/50 p-4">
                    <div className="flex items-center gap-3">
                      {feature.icon}
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{feature.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-orange-100 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Trusted by teams delivering in</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm font-medium text-slate-600">
                  {industries.map((industry) => (
                    <div key={industry} className="rounded-md bg-orange-50 px-3 py-2 text-center">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/3">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Why teams choose us</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Clarity across every stage of delivery</h2>
            <p className="mt-4 text-base text-slate-600">
              Consolidate product planning, experimentation, and customer engagement into a single adaptive system. PulseDynamics
              keeps your teams synchronised and your stakeholders aligned.
            </p>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <FaCloud className="text-2xl text-orange-500" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Connected ecosystem</h3>
              <p className="mt-2 text-sm text-slate-600">
                Integrations with data warehouses, design tools, ticketing platforms, and communication hubs keep context flowing.
              </p>
            </div>
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <FaHeadset className="text-2xl text-orange-500" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Human-centred AI copilots</h3>
              <p className="mt-2 text-sm text-slate-600">
                Proactively surface risks, opportunities, and next best actions so teams make faster, more informed decisions.
              </p>
            </div>
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <FaShieldAlt className="text-2xl text-orange-500" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Embedded governance</h3>
              <p className="mt-2 text-sm text-slate-600">
                Role-based access, audit trails, and ethical guardrails help enterprises deploy AI responsibly from day one.
              </p>
            </div>
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <FaBolt className="text-2xl text-orange-500" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Faster outcomes</h3>
              <p className="mt-2 text-sm text-slate-600">
                Automated rituals, progress insights, and predictive forecasting keep delivery velocity and quality high.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Solution suites</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-semibold text-slate-900">
              Purpose-built modules that scale with your operating model
            </h2>
            <p className="mt-4 max-w-3xl text-base text-slate-600">
              Mix and match our intelligent modules to fit your team structures. From early discovery to mature enterprise AI,
              PulseDynamics adapts to the way you deliver products.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {solutionTiles.map((solution) => (
              <div key={solution.title} className="flex flex-col rounded-2xl border border-orange-100 bg-orange-50/40 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{solution.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{solution.copy}</p>
                <Link
                  to="/solutions"
                  className="mt-auto inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500"
                >
                  View capabilities
                  <FaArrowRight className="ml-2 text-xs" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Customer stories</p>
            <h2 className="text-3xl font-semibold text-slate-900">Teams doing their best work with PulseDynamics</h2>
            <p className="text-base text-slate-600">
              From hyper-growth scale-ups to global enterprises, we help product organisations deliver transformative experiences.
              Our customer success partners bring decades of product leadership experience to every engagement.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center rounded-md border border-orange-300 px-5 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Talk with our team
              <FaArrowRight className="ml-2 text-xs" />
            </Link>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                <p className="text-base leading-relaxed text-slate-700">“{testimonial.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-slate-900">
                  {testimonial.name}
                  <span className="ml-2 text-xs font-normal text-slate-500">{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-500/90 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to unify your product delivery?</h2>
          <p className="max-w-3xl text-base text-orange-50">
            Launch in weeks with guidance from our solution architects and product strategists. We partner closely with your team
            to blueprint high-impact workflows and build momentum from the very first sprint.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Book a strategy session
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
