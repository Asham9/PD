const guides = [
  {
    title: 'AI governance starter kit',
    description: 'Frameworks and templates to launch responsible AI programs across distributed teams.',
    type: 'Guide',
    link: '#',
  },
  {
    title: 'Product metrics playbook',
    description: 'Practical worksheets to align product, design, and engineering leaders on shared outcomes.',
    type: 'Playbook',
    link: '#',
  },
  {
    title: 'Voice of customer research pack',
    description: 'Interview scripts, segmentation grids, and insight synthesis boards to capture actionable feedback.',
    type: 'Toolkit',
    link: '#',
  },
];

const Resources = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Resource library</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Insights to accelerate every team</h1>
        <p className="mt-4 text-base text-slate-600">
          Download templates, research packs, and best-practice guides curated by PulseDynamics strategists and customers. Each
          resource is designed to help you apply AI-enabled product delivery in your organisation.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {guides.map((guide) => (
          <article key={guide.title} className="flex flex-col rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">{guide.type}</span>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">{guide.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{guide.description}</p>
            <a
              href={guide.link}
              className="mt-auto inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500"
            >
              Download resource →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Resources;
