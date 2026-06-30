package com.apoorv.codeexplainer.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OpenAIService {

    @Value("${groq.api.key}")
    private String apiKey;

    @Value("${groq.model}")
    private String model;

    private final RestTemplate restTemplate;

    public OpenAIService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String explainCode(String code, String language) {

        try {

            String prompt = """
                Explain the following %s code in plain English.
                Keep the explanation between 2 and 4 sentences.
                Mention important functions and logic blocks.

                Code:
                %s
                """.formatted(language, code);

            HttpHeaders headers = new HttpHeaders();

            headers.setContentType(MediaType.APPLICATION_JSON);

            headers.setBearerAuth(apiKey);

            Map<String, Object> body = Map.of(
                    "model", model,
                    "messages", List.of(
                            Map.of(
                                    "role", "user",
                                    "content", prompt
                            )
                    ),
                    "temperature", 0.2
            );

            HttpEntity<Map<String, Object>> request =
                    new HttpEntity<>(body, headers);

            Map response = restTemplate.postForObject(
                    "https://api.groq.com/openai/v1/chat/completions",
                    request,
                    Map.class
            );

            List choices =
                    (List) response.get("choices");

            Map firstChoice =
                    (Map) choices.get(0);

            Map message =
                    (Map) firstChoice.get("message");

            return message.get("content").toString();

        }
        catch (Exception e) {
            e.printStackTrace();
            return "Unable to generate explanation.";
        }
    }

    public String optimizeCode(String code, String language) {

        try {

            String prompt = """
                Optimize the following %s code.
                Improve readability and efficiency.
                Return only code without markdown.

                Code:
                %s
                """.formatted(language, code);

            HttpHeaders headers = new HttpHeaders();

            headers.setContentType(MediaType.APPLICATION_JSON);

            headers.setBearerAuth(apiKey);

            Map<String, Object> body = Map.of(
                    "model", model,
                    "messages", List.of(
                            Map.of(
                                    "role", "user",
                                    "content", prompt
                            )
                    ),
                    "temperature", 0.1
            );

            HttpEntity<Map<String, Object>> request =
                    new HttpEntity<>(body, headers);

            Map response = restTemplate.postForObject(
            		"https://api.groq.com/openai/v1/chat/completions",
                    request,
                    Map.class
            );

            List choices =
                    (List) response.get("choices");

            Map firstChoice =
                    (Map) choices.get(0);

            Map message =
                    (Map) firstChoice.get("message");

            return message.get("content").toString();

        }
        catch (Exception e) {
            e.printStackTrace();
            return code;
        }
    }
}