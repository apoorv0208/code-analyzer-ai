function HistorySidebar({ history, setHistory }) {
    const deleteHistoryItem = (index) => {

      const updatedHistory =
        history.filter((_, i) => i !== index);

      setHistory(updatedHistory);

      localStorage.setItem(
        "history",
        JSON.stringify(updatedHistory)
      );
    };
    const clearHistory = () => {

      setHistory([]);

      localStorage.removeItem("history");
    };
  return (
    <div className="history-sidebar">
      <h2>Recent Analyses</h2>

        {history.length > 0 && (
          <button
            className="clear-history-btn"
            onClick={clearHistory}
          >
            Clear All
          </button>
        )}
      

      {history.length === 0 ? (
        <div className="empty-history">
          <p>No analyses yet.</p>
          <small>
            Analyze your first code snippet to get started.
          </small>
        </div>
      ) : (
        history.map((item, index) => (
          <div key={index} className="history-card">

            <div className="history-header">
              <h3>{item.title}</h3>

              <button
                className="delete-history-btn"
                onClick={() => deleteHistoryItem(index)}
              >
                ✕
              </button>
            </div>

            <p>{item.language}</p>

          </div>
        ))
      )}
    </div>
  );
}

export default HistorySidebar;