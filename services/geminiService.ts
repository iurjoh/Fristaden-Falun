import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  throw new Error("API_KEY environment variable not set.");
}

export const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateSermonIdea = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a sermon outline for the topic: "${topic}". The outline should be inspiring, biblically sound, and practical for a modern congregation. If the topic is inappropriate for a sermon or you cannot fulfill the request, you MUST only return a JSON object with an "error" field explaining the reason.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: 'A creative and engaging title for the sermon.',
            },
            points: {
              type: Type.ARRAY,
              description: 'An array of 3-4 main points for the sermon outline.',
              items: {
                type: Type.OBJECT,
                properties: {
                  pointTitle: {
                    type: Type.STRING,
                    description: 'A concise title for this sermon point.',
                  },
                  description: {
                    type: Type.STRING,
                    description: 'A short paragraph expanding on this sermon point.',
                  },
                },
                required: ['pointTitle', 'description'],
              },
            },
            verses: {
              type: Type.ARRAY,
              description: 'An array of 3-5 relevant Bible verses that support the sermon topic.',
              items: {
                type: Type.STRING,
              },
            },
            error: {
              type: Type.STRING,
              description: 'If the topic is inappropriate or cannot be fulfilled, provide a reason here.',
            },
          },
        },
      },
    });

    return response.text;
  } catch (error) {
    console.error('Error generating sermon idea:', error);
    return JSON.stringify({
      error: 'An error occurred while generating the sermon idea. This could be due to a network issue or a content safety filter. Please try a different topic.',
    });
  }
};

export const generateWelcomeEmail = async (firstName: string, service: string, time: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `A visitor named ${firstName} has planned a visit for the "${service}" service on ${time}. Generate a warm and welcoming confirmation email to them. The email should be from "the Fristaden Falun team". It should confirm the service they chose and the time, express excitement about meeting them, and offer to answer any questions by contacting info@fristadenfalun.se. Keep it concise and friendly.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            subject: {
              type: Type.STRING,
              description: 'A welcoming subject line for the email, e.g., "We\'re excited to see you at Fristaden Falun!"',
            },
            body: {
              type: Type.STRING,
              description: 'The full text of the email body. Use \\n for new lines.',
            },
            error: {
              type: Type.STRING,
              description: 'If the request cannot be fulfilled, provide a reason here.',
            },
          },
          required: ['subject', 'body'],
        },
      },
    });

    return response.text;
  } catch (error) {
    console.error('Error generating welcome email:', error);
    return JSON.stringify({
      error: 'An error occurred while generating the welcome email. Please try again.',
    });
  }
};