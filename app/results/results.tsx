import Link from "next/link";

export default function FinalResult() {
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
              1
            </span>
            <span className="mb-1 text-sm text-[#555]">/10</span>
          </div>

          <div className="flex-1">
            <h2 className="text-sm font-semibold text-white">
              frontend interview — junior
            </h2>

            <p className="mt-2 max-w-3xl text-xs leading-6 text-[#666]">
              The candidate is not currently ready for a frontend junior role
              interview — zero engagement with technical questions signals a
              critical gap between resume claims and demonstrated knowledge that
              must be addressed before the next attempt.
            </p>
          </div>
        </div>
      </div>

      <Link href="/">
        <button className="w-full text-center py-2 border border-gray-500 mt-5 cursor-pointer hover:bg-blue-600">
          Start new one
        </button>
      </Link>
    </div>
  );
}
