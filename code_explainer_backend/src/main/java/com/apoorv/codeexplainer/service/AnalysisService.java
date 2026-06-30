package com.apoorv.codeexplainer.service;

import com.apoorv.codeexplainer.dto.AnalyzeRequest;
import com.apoorv.codeexplainer.dto.AnalyzeResponse;
import com.apoorv.codeexplainer.dto.StructureDto;
import com.apoorv.codeexplainer.dto.ComplexityDto;
import org.springframework.stereotype.Service;
@Service
public class AnalysisService {

    private final ParserService parserService;
    private final OpenAIService openAIService;
    public AnalysisService(
            ParserService parserService,
            OpenAIService openAIService) {

        this.parserService = parserService;
        this.openAIService = openAIService;
    }
    
    public AnalyzeResponse analyze(
            AnalyzeRequest request) {

        AnalyzeResponse response =
                new AnalyzeResponse();

        StructureDto structure =
                parserService.parse(
                        request.getCode(),
                        request.getLanguage()
                );

        response.setStructure(structure);

        String explanation =
                openAIService.explainCode(
                        request.getCode(),
                        request.getLanguage()
                );

        response.setExplanation(explanation);
        response.setOptimizedCode(
                openAIService.optimizeCode(
                        request.getCode(),
                        request.getLanguage()
                )
        );
        

        ComplexityDto complexity =
                new ComplexityDto();

        if (structure.isRecursive()) {

            complexity.setTimeComplexity("O(n)");
            complexity.setSpaceComplexity("O(n)");

        }
        else if (structure.getLoops() == 0) {

            complexity.setTimeComplexity("O(1)");
            complexity.setSpaceComplexity("O(1)");

        }
        else if (structure.getLoops() == 1) {

            complexity.setTimeComplexity("O(n)");
            complexity.setSpaceComplexity("O(1)");

        }
        else if (structure.getLoops() == 2) {

            complexity.setTimeComplexity("O(n²)");
            complexity.setSpaceComplexity("O(1)");

        }
        else {

            complexity.setTimeComplexity("O(n³)");
            complexity.setSpaceComplexity("O(1)");
        }

        response.setComplexity(complexity);
        response.setConfidence(92);
        
        return response;
    }
}