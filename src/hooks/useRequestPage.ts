import { useState } from "react";

export const useRequestPage = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage((prev) => prev + 1);

  // totals are hardcoded because of mock-api limited features
  const perPage = 12;
  const totals = 32;
  const totalPages = Math.ceil(totals / perPage);

  return { page, nextPage, totalPages };
};
