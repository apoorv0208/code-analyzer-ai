function StructurePanel({ analysis }) {

  const structure = analysis?.structure;

  return (
    <div className="analysis-card">
      <h2>Code Structure</h2>

      <div className="structure-grid">
        <div className="structure-item">
          <h3>{structure?.functions ?? 0}</h3>
          <span>Functions</span>
        </div>

        <div className="structure-item">
          <h3>{structure?.loops ?? 0}</h3>
          <span>Loops</span>
        </div>

        <div className="structure-item">
          <h3>{structure?.conditionals ?? 0}</h3>
          <span>Conditionals</span>
        </div>

        <div className="structure-item">
          <h3>{structure?.classes ?? 0}</h3>
          <span>Classes</span>
        </div>
      </div>
    </div>
  );
}

export default StructurePanel;