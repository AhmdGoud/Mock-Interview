async function finalResults(
  questions: string[],
  answers: string[],
): Promise<string | unknown> {
  try {
    const response = await puter.ai.chat(
      `depending on this questions ${questions.join(",")} and answers ${answers.join(",")}, 
      give me a feedback of 2 to 3 lines without using * sign, and what Q is right and what is not`,
      {
        model: "gpt-5.4-nano",
      },
    );

    return response.message.content;
  } catch (error) {
    return error;
  }
}
export default finalResults;
