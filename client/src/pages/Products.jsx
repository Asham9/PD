const products = [
  {
    name: 'PulseNavigator',
    tier: 'For strategic leaders',
    description:
      "Translate corporate goals into measurable product outcomes. Prioritise initiatives with integrated forecasting and scenario planning dashboards.",
    features: ['Adaptive OKR planning', 'Portfolio-level risk dashboards', 'Executive-ready reporting'],
    price: 'Custom pricing',
  },
  {
    name: 'PulseOrchestrate',
    tier: 'For product squads',
    description:
      'Run discovery, delivery, and experimentation from one space. Automate rituals and capture customer signals in real-time.',
    features: ['Experiment hub with AI insights', 'Delivery health automation', 'Customer feedback intelligence'],
    price: '$89 per user / month',
  },
  {
    name: 'PulseGovern',
    tier: 'For compliance and operations',
    description:
      'Monitor model usage, automate review workflows, and maintain a full audit trail for AI-assisted experiences.',
    features: ['Model registry and scorecards', 'Risk classification engine', 'Audit-ready documentation'],
    price: '$129 per user / month',
  },
];

const Products = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Product suites</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Choose the toolkit that fits your operating model</h1>
        <p className="mt-4 text-base text-slate-600">
          PulseDynamics is modular by design. Select only the capabilities you need today and expand as your organisation scales.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.name} className="flex flex-col rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wider text-orange-500">
              <span>{product.tier}</span>
              <span>{product.price}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">{product.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-md border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:border-orange-300 hover:bg-orange-50"
            >
              Request a demo
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
