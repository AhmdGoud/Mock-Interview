"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { useState } from "react";
import Link from "next/link";
import { updateAnswers, updateResult } from "@/redux/interviewSlice";
import { increment } from "../../redux/stageSlice";
import finalResults from "../AIGenerates/GenerateResults";

export default function InterviewQuestions() {
  const dispatch = useDispatch();

  const questions = useSelector(
    (state: RootState) => state.interview.questions,
  );
  console.log("questions are" + questions); //

  const answers = useSelector((state: RootState) => state.interview.answers);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");

  async function getFinalRes() {
    const results = await finalResults(arrayOfQuestions, answers);
    dispatch(updateResult(results));
  }

  if (!questions) {
    return (
      <div className="flex flex-col items-center mt-8">
        <div className="mb-2 w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        <p>Generating Questions</p>
      </div>
    );
  }

  const arrayOfQuestions = questions?.split(/\d+[.)]\s*/).filter(Boolean);
  const progressBar = ((currentQuestion + 1) / arrayOfQuestions?.length) * 100;
  const isLastQuestion = currentQuestion === arrayOfQuestions.length - 1;

  if (questions) {
    return (
      <div className="mx-auto w-full max-w-2xl py-8">
        {/* progress bar */}
        <div className="mb-8 flex items-start justify-between gap-6">
          <div className="flex min-w-32.5 items-center gap-3 pt-6">
            <div className="h-0.5 flex-1 bg-[#333]">
              <div
                className="h-full bg-white"
                style={{ width: `${progressBar}%` }}
              />
            </div>

            <span className="whitespace-nowrap text-[10px] font-mono text-[#777]">
              {currentQuestion + 1 + "/" + arrayOfQuestions.length}
            </span>
          </div>
        </div>

        <div className="mb-8 h-px bg-[#252525]" />

        {/* question and answer*/}
        <section>
          <p className="mb-4 font-mono text-[10px] tracking-widest text-[#333]">
            QUESTION {currentQuestion + 1}
          </p>

          <h1 className="mb-6 text-[16px] font-medium leading-7 text-white">
            {arrayOfQuestions[currentQuestion]}
          </h1>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="type your answer..."
            className="h-32 w-full resize-none rounded border border-[#303030] bg-[#141414] p-4 text-sm text-white outline-none placeholder:text-[#383838] focus:border-[#555]"
          />

          {/* words counter and next btn */}
          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#333]">
              {answer.length} words
            </span>

            <Link href={isLastQuestion ? "/results" : "#"}>
              <button
                disabled={!answer}
                onClick={() => {
                  setCurrentQuestion(currentQuestion + 1);
                  dispatch(updateAnswers(answer));
                  setAnswer("");
                  if (isLastQuestion) {
                    dispatch(increment());
                    getFinalRes();
                  }
                }}
                className={`rounded border border-[#292929] px-6 py-3 text-xs text-[#444] 
                ${answer ? "bg-gray-300 cursor-pointer" : "cursor-not-allowed"}`}
              >
                {isLastQuestion ? "submit" : "next"} →
              </button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
