import { useState } from "react";
import { useRef } from "react";

import Header from "../components/common/Header";
import HistorySidebar from "../components/history/HistorySidebar";
import CodeEditor from "../components/editor/CodeEditor";
import ExplanationPanel from "../components/analysis/ExplanationPanel";
import StructurePanel from "../components/analysis/StructurePanel";
import ComplexityPanel from "../components/analysis/ComplexityPanel";
import ConfidencePanel from "../components/analysis/ConfidencePanel";
import OptimizationPanel from "../components/analysis/OptimizationPanel";

function Dashboard() {

  const [analysisResult, setAnalysisResult] = useState(null);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );
  const [loading, setLoading] = useState(false);
  const resultRef = useRef(null);
  return (
    <div>
      <Header />

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <HistorySidebar history={history} setHistory={setHistory} />

        <div style={{ flex: 1 }}>
          <CodeEditor setAnalysisResult={setAnalysisResult} history={history}
                setHistory={setHistory} loading={loading}
                setLoading={setLoading} resultRef={resultRef}/>
          <div ref={resultRef}>
            <ExplanationPanel analysis={analysisResult} />
            <StructurePanel analysis={analysisResult} />
            <ComplexityPanel analysis={analysisResult} />
            <ConfidencePanel analysis={analysisResult} />
            <OptimizationPanel analysis={analysisResult} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;