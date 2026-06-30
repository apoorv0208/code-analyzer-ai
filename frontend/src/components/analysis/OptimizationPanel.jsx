
function OptimizationPanel({ analysis }) {

  return (
    <div className="analysis-card">
      <h2>Optimized Code</h2>

      <pre className="code-block">
        {analysis?.optimizedCode || "No optimization available."}
      </pre>
    </div>
  );
}

export default OptimizationPanel;