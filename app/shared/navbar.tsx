"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

type Step = {
  id: number;
  label: string;
  stage: string;
};

export const steps: Step[] = [
  { id: 1, label: "01 upload", stage: "/" },
  { id: 2, label: "02 setup", stage: "/setup" },
  { id: 3, label: "03 interview", stage: "/interview" },
  { id: 4, label: "04 results", stage: "/results" },
];

const Navbar = () => {
  const page = useSelector((state: RootState) => state.stage.value);

  return (
    <nav className="min-h-full flex flex-col ">
      <div className="flex justify-between p-1 pb-5 border-b-2 mb-5">
        <h4>Mock-Interview</h4>
        <p className="text-gray-500">Ai job interview</p>
      </div>

      <div className="grid grid-cols-4 border border-gray-500 rounded-es-xs ">
        {steps.map((step) => {
          return (
            <p
              className={[
                "border-r border-gray-500 py-2 text-center",
                page === step.id && "bg-white/20",
                page > step.id && "bg-green-600",
                page < step.id && "bg-transparent",
              ]
                .filter(Boolean)
                .join(" ")}
              key={step.id}
            >
              <span>{step.label}</span>
            </p>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
