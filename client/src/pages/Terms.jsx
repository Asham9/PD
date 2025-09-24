const Terms = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold sm:text-4xl">Terms of service</h1>
      <p className="mt-4 text-base text-slate-600">
        By using PulseDynamics you agree to operate responsibly, protect customer data, and comply with all applicable laws.
        These terms summarise your rights and obligations when accessing our products and services.
      </p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Use of the platform</h2>
          <p>
            You may only use the platform within the scope of your subscription agreement. All intellectual property remains the
            property of PulseDynamics.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Data responsibility</h2>
          <p>
            You are responsible for the accuracy of data you upload and must ensure you have consent to share personal
            information. We provide enterprise-grade security controls to protect your information.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Support</h2>
          <p>
            Support is available Monday to Friday. For critical incidents our response time is under four hours. Contact
            support@pulsedynamics.ai for assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
