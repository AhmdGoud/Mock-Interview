import { DataType } from "@/redux/jobDetailsSlice";

async function interviewQs(
  resumeText: string,
  jobData: DataType,
): Promise<string | unknown> {
  try {
    const response = await puter.ai.chat(
      `You are an expert technical interviewer.

Generate exactly ${jobData.numberOfQuestions[0]} interview questions based on the information below.

Role: ${jobData.roleTitle}
Seniority level: ${jobData.seniorityLevel}

Job description:
${jobData.jobDescription}

Resume:
${resumeText}

Requirements:
- Questions should primarily evaluate the skills, technologies, concepts, and responsibilities relevant to the role and job description.
- Use the resume only as supporting context.
- Do not focus heavily on specific projects mentioned in the resume.
- Questions should be appropriate for the ${jobData.seniorityLevel} seniority level.
- Cover a variety of relevant technical topics rather than asking similar questions.
- Questions should test understanding and practical knowledge, not just definitions.
- Do not include answers or explanations.
- Do not use the "*" character anywhere in the response.
- Return only the questions.
- Number the questions from 1 to ${jobData.numberOfQuestions[0]}.`,
      {
        model: "gpt-5.4-nano",
      },
    );

    return response.message.content;
  } catch (error) {
    return error;
  }
}
export default interviewQs;
