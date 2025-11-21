import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

const apiKey = process.env.API_KEY || '';

// Singleton instance to avoid recreating the client
let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToGemini = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  try {
    if (!apiKey) {
      return "System Error: API Key not configured. Please contact the administrator.";
    }

    const client = getClient();
    
    // Convert history to Gemini format if needed, but for simple chat we'll use generateContent with instruction
    // For a true chat experience, we construct a prompt with history
    
    const chatHistoryStr = history.map(m => `${m.role === 'user' ? 'User' : 'System'}: ${m.text}`).join('\n');
    const prompt = `${SYSTEM_INSTRUCTION}\n\nConversation History:\n${chatHistoryStr}\n\nUser: ${newMessage}\nSystem:`;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "System malfunction: Empty response received.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted. Neural link unstable.";
  }
};
