import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // 🔒 Secure API Key

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const analyzeContract = async (
  contract: string,
  setResults: any,
  setLoading: any
) => {
  setLoading(true);

  try {
    const prompt = `
    Your role is an AI Smart Contract Auditor. Analyze this contract:
    ${contract}

    Provide the results in the following structured format:
    [
      {"section": "Audit Report", "details": "A detailed audit report covering security, performance, and other aspects."},
      {"section": "Metric Scores", "details": [
        {"metric": "Security", "score": 0-10},
        {"metric": "Performance", "score": 0-10},
        {"metric": "Gas Efficiency", "score": 0-10},
        {"metric": "Code Quality", "score": 0-10},
        {"metric": "Documentation", "score": 0-10}
      ]},
      {"section": "Suggestions for Improvement", "details": "Suggestions to enhance security and performance."}
    ]
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    const auditResults = JSON.parse(responseText);
    setResults(auditResults);
  } catch (error) {
    console.error("Gemini API Error:", error);
    setResults([]);
  } finally {
    setLoading(false);
  }
};
