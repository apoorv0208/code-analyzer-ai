import { useState } from "react";
import Editor from "@monaco-editor/react";
import api from "../../services/api";

function CodeEditor({ setAnalysisResult,history,setHistory, loading, setLoading, resultRef }) {
  const [language, setLanguage] = useState("python");

  const [code, setCode] = useState(`#Write your code here!`);

  const handleAnalyze = async () => {

  if (!code.trim()) {
    alert("Please enter code.");
    return;
  }

  try {
    setLoading(true);
    const response = await api.post("/analyze", {
      code,
      language,
    });
    setLoading(false);
    setAnalysisResult(response.data);
    setTimeout(() => {
        resultRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);
    const title =
      code.match(/def\s+(\w+)/)?.[1] ||
      code.match(/function\s+(\w+)/)?.[1] ||
      "Untitled Snippet";

    const newItem = {
      title,
      language,
      code,
      timestamp: Date.now()
    };

    // Remove duplicate entries
    const filteredHistory = history.filter(
      item =>
        !(
          item.code === code &&
          item.language === language
        )
    );

    // Add newest item to the top
    const updatedHistory = [
      newItem,
      ...filteredHistory
    ].slice(0, 10); // Keep only latest 10

    setHistory(updatedHistory);

    localStorage.setItem(
      "history",
      JSON.stringify(updatedHistory)
    );
  } catch (error) {
    setLoading(false);
    console.error(error);
    alert("Backend connection failed.");
  }
};

  return (
    <div className="editor-card">
      <div className="editor-toolbar">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>

        <button
            onClick={handleAnalyze}
            disabled={loading}
        >
            {loading ? "Analyzing..." : "Analyze Code"}
        </button>
      </div>

      <Editor
        height="550px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          minimap: {
            enabled: false,
          },
          automaticLayout: true,
          fontSize: 14,
          scrollBeyondLastLine: false,
          wordWrap: "on",
        }}
      />
    </div>
  );
}

export default CodeEditor;