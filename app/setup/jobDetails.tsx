"use client";

import { useDispatch } from "react-redux";
import { handelChangeData } from "@/redux/jobDetailsSlice";
import { AppDispatch } from "@/redux/store";

export default function JobDetails() {
  const dispatch = useDispatch<AppDispatch>();

  function handelDispatch(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    dispatch(
      handelChangeData({
        name: e.target.name,
        value: e.target.value,
      }),
    );
  }

  return (
    <div className="mt-5 mb-2">
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-gray-500 shrink-0 mr-1.5">Job Details</h5>
        <p className="w-full h-0.5 bg-gray-700"></p>
      </div>

      {/* Job Description */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-[10px] uppercase tracking-[3px] text-gray-500">
            Job Description
          </label>

          <span className="text-xs text-gray-600">paste the full posting</span>
        </div>

        <textarea
          name="jobDescription"
          onChange={(e) => handelDispatch(e)}
          placeholder="paste the job description here..."
          rows={8}
          className="w-full bg-[#111] border border-gray-800 rounded-md px-4 py-3 text-sm placeholder:text-gray-700 outline-none focus:border-gray-600 resize-none"
        />
      </div>

      {/* Role and Seniority */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-[10px] uppercase tracking-[3px] text-gray-500">
              Role Title
            </label>
          </div>

          <input
            name="roleTitle"
            onChange={(e) => handelDispatch(e)}
            type="text"
            placeholder="e.g. Frontend Developer"
            className="w-full h-12 bg-[#111] border border-gray-800 rounded-md px-4 text-sm placeholder:text-gray-700 outline-none focus:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[3px] text-gray-500 mb-2">
            Seniority
          </label>

          <select
            name="seniorityLevel"
            onChange={(e) => handelDispatch(e)}
            className="w-full h-12 bg-[#111] border border-gray-800 rounded-md px-4 text-sm outline-none focus:border-gray-600 appearance-none"
          >
            <option>Junior</option>
            <option>Mid-level</option>
            <option>Senior</option>
            <option>Lead</option>
          </select>
        </div>
      </div>

      {/* Number of Questions */}
      <div>
        <label className="block text-[10px] uppercase tracking-[3px] text-gray-500 mb-2">
          Number of Questions
        </label>

        <select
          name="numberOfQuestions"
          onChange={(e) => handelDispatch(e)}
          className="w-full h-12 bg-[#111] border border-gray-800 rounded-md px-4 text-sm outline-none focus:border-gray-600 appearance-none"
        >
          <option>3 — quick session</option>
          <option>5 — standard</option>
          <option>7 — thorough</option>
          <option>10 — full interview</option>
        </select>
      </div>
    </div>
  );
}
