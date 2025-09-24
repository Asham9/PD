const services = [
  {
    title: 'Product strategy advisory',
    description:
      "Partner with former CPOs and product leaders to craft outcome-driven strategies, define operating models, and guide transformational change.",
    deliverables: ['Strategy blueprint workshops', 'Executive stakeholder alignment', 'Product analytics instrumentation'],
  },
  {
    title: 'Experience design and research',
    description:
      'End-to-end design support with a focus on inclusive and data-backed research methods to shape thoughtful experiences.',
    deliverables: ['Customer journey synthesis', 'Design system evolution', 'Accessibility audits'],
  },
  {
    title: 'AI enablement and governance',
    description:
      'Co-create governance frameworks, train teams on responsible AI adoption, and implement monitoring across the lifecycle.',
    deliverables: ['Model risk assessments', 'Compliance playbooks', 'Capability coaching programs'],
  },
];

const Services = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Advisory services</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Expert partners across the product lifecycle</h1>
        <p className="mt-4 text-base text-slate-600">
          Our services team extends your in-house capabilities. Whether you are scaling a new product line or modernising an
          established portfolio, we embed specialists to accelerate value while levelling up your organisation.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="flex flex-col rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-md border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:border-orange-300 hover:bg-orange-50"
            >
              Speak with an advisor
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
