import { GoogleGenAI } from "@google/genai";
import { COURSES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a senior academic counselor at SkillForge, an elite training agency for Computer Science students.
Your goal is to recommend courses from our catalog based on the user's career aspirations.
Our Catalog:
${JSON.stringify(COURSES.map(c => ({ title: c.title, category: c.category, description: c.description })))}

Rules:
1. Be encouraging, professional, and concise.
2. If the user asks for a path (e.g., "I want to work at Google"), suggest a combination of our courses (e.g., Long Term DSA + System Design).
3. Keep responses under 100 words.
4. Do not mention courses that are not in the catalog.
`;

export const getCareerAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I couldn't generate a recommendation at this time. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI advisor is currently offline. Please check back later.";
  }
};