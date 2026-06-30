import { createContext, useState } from "react";

export const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {
    const [analysisHistory, setAnalysisHistory] = useState([]);
    const [currentAnalysis, setCurrentAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <AnalysisContext.Provider
            value={{
                analysisHistory,
                setAnalysisHistory,
                currentAnalysis,
                setCurrentAnalysis,
                loading,
                setLoading,
            }}
        >
            {children}
        </AnalysisContext.Provider>
    );
};