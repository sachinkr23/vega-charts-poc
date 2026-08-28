export function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Visualization research</p>
        <h1>Vega charts playground</h1>
        <p className="intro">
          A focused workspace for testing chart specifications, streaming data, and interactive visualizations.
        </p>

        <div className="status status--ready" role="status">
          <span className="status__dot" aria-hidden="true" />
          Frontend-only PoC ready
        </div>
      </section>

      <section className="chart-placeholder" aria-label="Chart workspace placeholder">
        <div>
          <span className="chart-placeholder__icon" aria-hidden="true">⌁</span>
          <h2>Chart workspace ready</h2>
          <p>The next step is to add the first Vega experiment here.</p>
        </div>
      </section>
    </main>
  );
}
