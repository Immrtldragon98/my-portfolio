export default function BuilderProcess() {
  return (
    <section className="page-shell process-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">How I work</p>
          <h2>Curiosity, with a feedback loop.</h2>
        </div>
      </div>
      <div className="process-grid">
        {[
          {
            title: "Understand",
            text: "Start with the problem and the person using the product.",
          },
          {
            title: "Build",
            text: "Connect interface, backend and data into a working flow.",
          },
          {
            title: "Refine",
            text: "Test assumptions, review failures and improve the next version.",
          },
        ].map((step, i) => (
          <div key={step.title}>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
