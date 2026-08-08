"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function GenerateQuestions() {
  const resumeText = useSelector(
    (state: RootState) => state.isResumeUp.resumeText,
  );

  const jobData = useSelector((state: RootState) => state.jobData);

  async function interviewQs(): Promise<string | unknown> {
    try {
      const response = await puter.ai.chat(
        `give me 1 Q depending on this info , Resume: ${resumeText}, jobDescription:${jobData.jobDescription}
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

  return interviewQs();
}
