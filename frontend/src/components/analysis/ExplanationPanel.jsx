function ExplanationPanel({ analysis }) {

  return (
    <div className="analysis-card">
      <h2>Explanation</h2>

      <div className="explanation-text">
        {analysis?.explanation}
      </div>
    </div>
  );
}

export default ExplanationPanel;