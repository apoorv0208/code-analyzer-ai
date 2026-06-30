package com.apoorv.codeexplainer.dto;

public class AnalyzeResponse {

    private String explanation;
    private StructureDto structure;
    private ComplexityDto complexity;
    private Integer confidence;
    private String optimizedCode;

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public StructureDto getStructure() {
        return structure;
    }

    public void setStructure(StructureDto structure) {
        this.structure = structure;
    }

    public ComplexityDto getComplexity() {
        return complexity;
    }

    public void setComplexity(ComplexityDto complexity) {
        this.complexity = complexity;
    }

    public Integer getConfidence() {
        return confidence;
    }

    public void setConfidence(Integer confidence) {
        this.confidence = confidence;
    }

    public String getOptimizedCode() {
        return optimizedCode;
    }

    public void setOptimizedCode(String optimizedCode) {
        this.optimizedCode = optimizedCode;
    }
}