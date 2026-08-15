"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

export default function FinalResult() {
  const jobData = useSelector((state: RootState) => state.jobData);
  const results = useSelector((state: RootState) => state.interview.results);
  const parsedResults = results ? JSON.parse(results) : null;

  if (jobData && !results) {
    return (
      <div className="flex flex-col items-center mt-8">
        <div className="mb-2 w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        <p>Generating Results</p>
      </div>
    );
  } else {
    return (
      <div className="my-5">
        <div className="flex justify-between items-center mb-5">
          <h5 className="text-gray-500 shrink-0 mr-1.5">Ur Results</h5>
          <p className="w-full h-0.5 bg-gray-700"></p>
        </div>

        <div className="border border-[#292929] bg-[#151515] p-7">
          <div className="flex items-center gap-8">
            <div className="flex items-end">
              <span className="text-5xl font-bold leading-none text-[#a66f73]">
                {parsedResults.score}
              </span>
              <span className="mb-1 text-sm text-[#555]">/10</span>
            </div>

            <div className="flex-1">
              <h2 className="text-sm font-semibold text-white">
                {jobData.roleTitle} — {jobData.seniorityLevel}
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#666]">
                <span>Overall Feedback: </span>
                {parsedResults.overallFeedback}
              </p>

              <p className="mt-2 -mb-1 text-sm leading-6 text-white">
                Feedback in detail:
              </p>

              {parsedResults.questionsFeedback.map((q: string, i: number) => {
                return (
                  <p
                    key={i}
                    className="mt-1 max-w-3xl text-sm leading-6 text-[#666]"
                  >
                    {q}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="w-full text-center py-2 border border-gray-500 mt-5 cursor-pointer hover:bg-blue-600"
        >
          Start new one
        </button>
      </div>
    );
  }
}
