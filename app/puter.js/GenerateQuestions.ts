import { DataType } from "@/redux/jobDetailsSlice";

async function interviewQs(
  resumeText: string,
  jobData: DataType,
): Promise<string | unknown> {
  try {
    const response = await puter.ai.chat(
      `generate ${jobData.numberOfQuestions[0]} questions depending on this comming info in general 
        not depending more on resume projects without using this sign * in ur result,
        Resume: ${resumeText}, jobDescription:${jobData.jobDescription}
        roleTitle: ${jobData.roleTitle}, seniorityLevel: ${jobData.seniorityLevel},`,
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
