import { createContext } from "react";

type currentPageType = {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const currentPage = createContext<currentPageType | null>(null);
