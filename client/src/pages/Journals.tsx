import { useEffect, useState } from "react";
import JournalCard from "../components/Journals/JournalCard";
import journal from "../api/journal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import type { JournalProps } from "../types/journalProps";

function Journals() {
  const [journals, setJournals] = useState<JournalProps[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJournals = async () => {
    try {
      const data = await journal.getJournals(pageNumber);
      setJournals(data.journals);
      console.log(journals);
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
    <div className="flex flex-col justify-center text-center h-screen hover:shadow-lg duration-300 shadow-gray-900 p-1.5">
      <h1 className="text-2xl md:text-5xl font-bold uppercase mb-8">daily jouenals</h1>
      {journals.length > 0 ? (
        <>
          <div className="mt-4 overflow-y-auto max-h-[70vh] flex flex-col items-center">
            {journals.map((journal: JournalProps) => (
              <JournalCard
                _id={journal._id}
                key={journal._id}
                text={journal.text}
                day={journal.day}
                productivityRating={journal.productivityRating}
              />
            ))}
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={gotoFirstPage}
              className="btn btn-ghost btn-lg"
              disabled={pageNumber === 1}
            >
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>
            <button
              onClick={previousPage}
              className="btn btn-ghost btn-lg"
              disabled={pageNumber === 1}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <p className="">
              {pageNumber} / {totalPages}
            </p>
            <button
              onClick={nextPage}
              className="btn btn-ghost btn-lg"
              disabled={pageNumber === totalPages}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button
              onClick={gotoLastPage}
              className="btn btn-ghost btn-lg"
              disabled={pageNumber === totalPages}
            >
              <FontAwesomeIcon icon={faAnglesRight} />
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
