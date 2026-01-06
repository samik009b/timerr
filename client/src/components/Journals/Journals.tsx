import { useState } from "react";
import JournalCard from "./JournalCard";

const journalData = [
  {
    _id: "695d04202acab43c3ddb3950",
    day: 0,
    text: "matushka dac",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04202acab43c3ddb3955",
    day: 1,
    text: "matushka",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04212acab43c3ddb3958",
    day: 2,
    text: "new text",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04222acab43c3ddb395b",
    day: 3,
    text: "new text",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04232acab43c3ddb395e",
    day: 4,
    text: "new text",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04232acab43c3ddb3961",
    day: 5,
    text: "new text",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04232acab43c3ddb3964",
    day: 6,
    text: "new text",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04242acab43c3ddb3967",
    day: 7,
    text: "new text",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04242acab43c3ddb396a",
    day: 8,
    text: "new text",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04252acab43c3ddb396d",
    day: 9,
    text: "new text",
    productivityRating: 0,
    __v: 0,
  },
  {
    _id: "695d04252acab43c3ddb3970",
    day: 10,
    text: "new text",
    productivityRating: 0,
    __v: 0,
  },
];

function Journals() {
  const limit = 5;
  const totalPages = Math.ceil(journalData.length / limit);
  const [pageNumber, setPageNumber] = useState(1);
  const skip = limit * (pageNumber - 1);

  const nextPage = () => {
    setPageNumber((prev) => {
      if (prev < totalPages) prev += 1;
      return prev;
    });
  };

  const previousPage = () => {
    setPageNumber((prev) => {
      if (prev > 1) prev -= 1;
      return prev;
    });
  };

  const gotoFirstPage = () => {
    setPageNumber(1);
  };

  const gotoLastPage = () => {
    setPageNumber(totalPages);
  };

  return (
    <div className="flex flex-col justify-center text-center h-screen">
      <h1 className="text-5xl underline font-bold uppercase">Reflections</h1>

      <div className="mt-4 overflow-y-auto max-h-[70vh]">
        {journalData.slice(skip, skip + limit).map((journal) => (
          <JournalCard
            key={journal._id}
            text={journal.text}
            day={journal.day}
            productivityrating={journal.productivityRating}
          />
        ))}
      </div>
      <div className="flex justify-center items-center m-2 space-x-3">
        <button onClick={gotoFirstPage} className="btn btn-link">
          First page
        </button>
        <button onClick={previousPage} className="btn bg-emerald-600 border-none text-lg p-4">
          ≺
        </button>
        <p className="text-gray-700 ">
          {pageNumber}/{totalPages}
        </p>
        <button onClick={nextPage} className="btn bg-emerald-600 border-none text-lg p-4">
          ≻
        </button>
        <button onClick={gotoLastPage} className="btn btn-link">
          Last page
        </button>
      </div>
    </div>
  );
}

export default Journals;
