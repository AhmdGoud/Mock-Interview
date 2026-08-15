import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    console.log(response);
    console.log(Response.json({ result: response.text }));

    return Response.json({ result: response.text });
  } catch (error) {
    console.log("error is" + error);
    return Response.json({ error: "something went wrong" });
  }
}
