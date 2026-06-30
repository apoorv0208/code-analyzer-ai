function ConfidencePanel({ analysis }) {
  return (
    <div className="analysis-card">
      <h2>Confidence Score</h2>

      <div className="confidence-circle">
        {analysis?.confidence || 0}%
      </div>
    </div>
  );
}

export default ConfidencePanel;