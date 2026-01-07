import { useEffect, useState } from "react";
import JournalCard from "./JournalCard";
import getJournals from "../../utils/getJournals";

type JournalType = {
  _id: string;
  day: number;
  text: string;
  productivityRating: number;
};

function Journals() {
  const [journals, setJournals] = useState<JournalType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJournals = async () => {
    try {
      const data = await getJournals(pageNumber);
      setJournals(data.journals);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to fetch journals:", error);
    }
  };
  useEffect(() => {
    fetchJournals();
  }, [pageNumber]);

  const nextPage = () => setPageNumber((prev) => Math.min(prev + 1, totalPages));
  const previousPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const gotoFirstPage = () => setPageNumber(1);
  const gotoLastPage = () => setPageNumber(totalPages);

  return (
    <div className="flex flex-col justify-center text-center h-screen">
      <h1 className="text-5xl underline font-bold uppercase">Reflections</h1>
      {journals.length > 0 ? (
        <>
          <div className="mt-4 overflow-y-auto max-h-[70vh]">
            {journals.map((journal: JournalType) => (
              <JournalCard
                id={journal._id}
                key={journal._id}
                text={journal.text}
                day={journal.day}
                productivityrating={journal.productivityRating}
              />
            ))}
          </div>

          <div className="flex justify-center items-center m-2 space-x-3">
            <button onClick={gotoFirstPage} className="btn btn-link" disabled={pageNumber === 1}>
              First page
            </button>
            <button
              onClick={previousPage}
              className="btn bg-emerald-600 border-none text-lg p-4"
              disabled={pageNumber === 1}
            >
              ≺
            </button>
            <p className="text-gray-700">
              {pageNumber} / {totalPages}
            </p>
            <button
              onClick={nextPage}
              className="btn bg-emerald-600 border-none text-lg p-4"
              disabled={pageNumber === totalPages}
            >
              ≻
            </button>
            <button
              onClick={gotoLastPage}
              className="btn btn-link"
              disabled={pageNumber === totalPages}
            >
              Last page
            </button>
          </div>
        </>
      ) : (
        <div className="mt-12 text-lg text-gray-600">
          <p>no journals</p>
          <button onClick={fetchJournals} className="btn btn-link text-lg">
            retry
          </button>
        </div>
      )}
    </div>
  );
}

export default Journals;
