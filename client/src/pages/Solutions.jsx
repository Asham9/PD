const solutions = [
  {
    title: 'Scaled agile operating model',
    description:
      'Provide product leaders with real-time visibility into squad health, dependencies, and delivery confidence across the portfolio.',
    outcomes: ['Predict delivery risks earlier', 'Keep roadmap and execution aligned', 'Streamline quarterly planning'],
  },
  {
    title: 'Customer experience command centre',
    description:
      'Combine behavioural analytics, qualitative feedback, and support signals to orchestrate customer journeys end-to-end.',
    outcomes: ['Map customer intent and friction', 'Trigger proactive retention plays', 'Personalise engagements at scale'],
  },
  {
    title: 'AI compliance and oversight',
    description:
      'Monitor model inventory, risk, and governance workflows in one workspace tailored to regulated industries.',
    outcomes: ['Centralise documentation', 'Automate review workflows', 'Maintain full auditability'],
  },
];

const Solutions = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Solution accelerators</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Tailored blueprints for complex organisations</h1>
        <p className="mt-4 text-base text-slate-600">
          Every solution combines the PulseDynamics platform with our partner network. Launch with ready-made playbooks and adapt
          them to your context with help from our strategists and data scientists.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {solutions.map((solution) => (
          <article key={solution.title} className="flex flex-col rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{solution.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{solution.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {solution.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-md border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:border-orange-300 hover:bg-orange-50"
            >
              Explore implementation plans
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
