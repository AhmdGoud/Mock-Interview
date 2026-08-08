"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeResumeStatus, fillResumeText } from "@/redux/isResumeUpSlice";

import extractedResumeText from "./extractResume";

export default function UploadResume() {
  const [file, setFile] = useState<File | null>(null);

  const dispatch = useDispatch();

  const handelAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFile(file);
    dispatch(changeResumeStatus());

    if (file) handelExtractFile(file);
  };

  const handelRemoveFile = () => {
    setFile(null);
    dispatch(changeResumeStatus());
  };

  const handelExtractFile = async (file: File) => {
    const resumeText = await extractedResumeText(file);
    if (resumeText) dispatch(fillResumeText(resumeText));
  };

  return (
    <div className="my-5">
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-gray-500 shrink-0 mr-1.5">Upload Resume</h5>
        <p className="w-4/5 h-0.5 bg-gray-700"></p>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        {!file ? (
          <label
            htmlFor="pdf-upload"
            className="flex h-60 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-600 bg-transparent transition hover:border-gray-600 hover:bg-gray-800"
          >
            <input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handelAddFile(e)}
            />
            <h2 className="text-2xl font-semibold text-white">
              Drag & drop your PDF here
            </h2>
            <p className="mt-2 text-gray-500">or click to browse - pdf only</p>
            <div className="rounded-lg bg-blue-600 px-6 py-3 mt-2 font-medium text-white transition hover:bg-blue-700">
              Choose PDF
            </div>
          </label>
        ) : (
          <div className="h-60 flex flex-col justify-center items-center border-2 rounded-md border-green-500 ">
            <p className="text-green-600">Resume uploaded successfully</p>
            <p className="text-green-600 border-2 p-2 rounded-md border-green-500">
              {file.name}
              <span
                onClick={() => handelRemoveFile()}
                className="text-red-700 ml-2 font-bold text-xl cursor-pointer"
              >
                x
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
