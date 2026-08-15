async function finalResults(
  questions: string[],
  answers: string[],
): Promise<string | unknown> {
  const prompt = `Evaluate the candidate's interview performance.

  Questions:
  ${questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}
  Answers:
  ${answers.map((a, i) => `${i + 1}. ${a}`).join("\n")}

  For each question, determine whether the answer is correct, partially correct, or incorrect.
  Return ONLY valid JSON in exactly this structure:

  {
    "score": 0,
    "overallFeedback": "2 to 3 concise lines of professional feedback.",
    "questionsFeedback": ["Q1:...", "Q2:..."]
  }

  Rules:
  - score must be a number from 0 to 10.
  - score represents the candidate's overall answer quality.
  - feedback must be 2 to 3 lines in general.
  - questionsFeedback must be 2 to 3 lines starting with the question number like Q1
  - Do not use the "*" character.
  - Evaluate each answer based on correctness, relevance, and completeness.
  - Do not assume information that is not present in the candidate's answer.
  - Return only JSON. No markdown, explanations, or code fences.`;

  const response = await fetch("/api/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  });

  const data = await response.json();
  return data.result;
}
export default finalResults;
