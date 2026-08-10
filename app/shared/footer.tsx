"use client";

import Link from "next/link";
import { steps } from "./navbar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { increment, decrement } from "../../redux/stageSlice";
import { changeResumeStatus } from "@/redux/isResumeUpSlice";

import interviewQs from "../puter.js/GenerateQuestions";
import { setQuestions } from "@/redux/interviewSlice";

const theSteps = steps;

const Footer = () => {
  const dispatch = useDispatch();

  const stage = useSelector((state: RootState) => state.stage.value);
  const resumeState = useSelector(
    (state: RootState) => state.isResumeUp.isResumeUp,
  );

  const resumeText = useSelector(
    (state: RootState) => state.isResumeUp.resumeText,
  );

  const jobData = useSelector((state: RootState) => state.jobData);
  const isJobDetailsFull = jobData.jobDescription && jobData.roleTitle;

  const nextRef = theSteps[stage]?.stage;
  const prevRef = theSteps[stage - 2]?.stage;

  async function generate() {
    const questions = await interviewQs(resumeText, jobData);
    dispatch(setQuestions(questions));
  }

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-1">
      <Link href={prevRef || "#"}>
        <button
          disabled={stage === 1}
          onClick={() => {
            if (stage > 1) dispatch(decrement());
          }}
          className="w-full text-center py-2 border border-gray-500 mt-5 cursor-pointer"
        >
          Back
        </button>
      </Link>

      <Link href={nextRef || "#"}>
        <button
          disabled={stage === 4 || (!resumeState && !isJobDetailsFull)}
          onClick={() => {
            dispatch(changeResumeStatus());
            if (isJobDetailsFull) generate();
            if (stage < 4) dispatch(increment());
          }}
          className={`w-full text-center py-2 border border-gray-500 mt-5
            ${resumeState || isJobDetailsFull ? "bg-blue-600 cursor-pointer" : "cursor-not-allowed"} `}
        >
          {stage === 2 ? "Start Interview" : "Continue"} &rarr;
        </button>
      </Link>
    </div>
  );
};
export default Footer;
