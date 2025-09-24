const milestones = [
  {
    year: '2018',
    title: 'PulseDynamics founded',
    description:
      'Our founding team left enterprise product leadership roles to build a platform focused on intelligent product delivery.',
  },
  {
    year: '2020',
    title: 'First enterprise launch',
    description:
      'Partnered with global fintech clients to orchestrate regulated AI deployments across 30+ markets in record time.',
  },
  {
    year: '2022',
    title: 'Experience orchestration suite',
    description:
      'Released an integrated suite for roadmap, experimentation, and customer engagement with embedded AI copilots.',
  },
  {
    year: '2024',
    title: 'Global customer community',
    description:
      'Launched PulseSummit with 1,200 product leaders sharing playbooks for AI-enabled product operations.',
  },
];

const values = [
  {
    title: 'Deliver measurable outcomes',
    description:
      'Every release should tie back to a clear customer or commercial value. We build tools that make those outcomes visible.',
  },
  {
    title: 'Design for people',
    description:
      'Responsible AI begins with empathy. We champion inclusive research, ethical guardrails, and accessible experiences.',
  },
  {
    title: 'Operate as one team',
    description:
      'Cross-functional collaboration is in our DNA. We partner with customers as an extension of their product organisation.',
  },
];

const AboutUs = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">Building resilient, intelligent product organisations</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          PulseDynamics helps product teams deliver adaptive, customer-first experiences. We blend deep product strategy expertise
          with AI-driven tooling to help enterprises move with the speed of start-ups while maintaining governance at scale.
        </p>
      </div>

      <div className="mt-12 grid gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-orange-100 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">What makes us different</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Our teams combine experience from product, design, engineering, and data leadership roles. We bring that operating
            knowledge directly into the platform. Every workflow is battle-tested by the leaders we serve.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            From day one, we invested in research partnerships with regulatory experts to ensure AI is deployed responsibly.
            Today, enterprises trust PulseDynamics to accelerate innovation while meeting strict compliance requirements.
          </p>
        </div>
        <div className="rounded-2xl bg-orange-50 p-6">
          <dl className="space-y-4 text-sm text-slate-700">
            <div>
              <dt className="font-semibold text-orange-600">120+</dt>
              <dd className="mt-1 text-slate-600">Product teams orchestrated across industries</dd>
            </div>
            <div>
              <dt className="font-semibold text-orange-600">35</dt>
              <dd className="mt-1 text-slate-600">Countries where customers run mission-critical journeys</dd>
            </div>
            <div>
              <dt className="font-semibold text-orange-600">98%</dt>
              <dd className="mt-1 text-slate-600">Customer satisfaction with our strategic advisory programs</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">Our journey</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">{milestone.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{milestone.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-slate-900 px-8 py-12 text-white">
        <h2 className="text-2xl font-semibold">Our values</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-white/20 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-200">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
