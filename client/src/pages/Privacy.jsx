const Privacy = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold sm:text-4xl">Privacy notice</h1>
      <p className="mt-4 text-base text-slate-600">
        PulseDynamics respects your privacy. We collect only the information required to deliver our services, operate the
        platform, and improve customer experiences. We never sell personal data.
      </p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Information we collect</h2>
          <p>
            Account details, usage analytics, and customer feedback are used to provide and enhance the service. For enterprise
            deployments we follow contractual data processing agreements.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">How we use your data</h2>
          <p>
            Data powers personalised onboarding, health monitoring, and product recommendations. Access is limited to authorised
            team members and governed by strict security controls.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Your choices</h2>
          <p>
            You can request data export or deletion at any time by contacting privacy@pulsedynamics.ai. We respond within 30
            days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
