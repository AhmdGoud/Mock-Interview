"use client";

import Link from "next/link";
import { steps } from "./navbar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { increment, decrement } from "../../redux/stageSlice";

const theSteps = steps;

const Footer = () => {
  const stage = useSelector((state: RootState) => state.stage.value);
  const dispatch = useDispatch();

  const nextRef = theSteps[stage]?.stage;
  const prevRef = theSteps[stage - 2]?.stage;

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
          disabled={stage === 4}
          onClick={() => {
            if (stage < 4) dispatch(increment());
          }}
          className="w-full text-center py-2 border border-gray-500 mt-5 cursor-pointer"
        >
          Continue &rarr;
        </button>
      </Link>
    </div>
  );
};
export default Footer;
