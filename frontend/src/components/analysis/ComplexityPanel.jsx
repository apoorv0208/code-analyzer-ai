function ComplexityPanel({ analysis }) {

  const complexity = analysis?.complexity;

  return (
    <div className="analysis-card">
      <h2>Complexity Analysis</h2>

      <div className="complexity-container">
        <div className="complexity-box">
          <h3>Time Complexity</h3>
          <p>{complexity?.timeComplexity || "N/A"}</p>
        </div>

        <div className="complexity-box">
          <h3>Space Complexity</h3>
          <p>{complexity?.spaceComplexity || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default ComplexityPanel;