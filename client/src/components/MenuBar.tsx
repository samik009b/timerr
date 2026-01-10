import addNewJournal from "../utils/addNewJournal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStopwatch20, faChartLine, faBook } from "@fortawesome/free-solid-svg-icons";

function MenuBar() {
  return (
    <div className="sticky bottom-5 flex space-x-2    ">
      <div>
        <ul
          className="menu menu-horizontal shadow-md bg-base-300 rounded-box 
        lg:space-x-3 lg:text-base"
        >
          <li>
            <div className="flex flex-col">
              <FontAwesomeIcon icon={faStopwatch20} />
              <p className="hidden md:block text-xs">stopwatch</p>
            </div>
          </li>
          <li>
            <div className="flex flex-col">
              <FontAwesomeIcon icon={faChartLine} />
              <p className="hidden md:block text-xs">graph</p>
            </div>
          </li>
          <li>
            <div className="flex flex-col">
              <FontAwesomeIcon icon={faBook} />
              <p className="hidden md:block text-xs">journals</p>
            </div>
          </li>
        </ul>
      </div>
      <button
        onClick={addNewJournal}
        className="bg-base-300 rounded-box px-3 hover:bg-gray-700 active:bg-gray-600 cursor-pointer"
      >
        <FontAwesomeIcon icon={faPlus} />
        <p className="hidden md:block text-xs ">new day</p>
      </button>
    </div>
  );
}

export default MenuBar;
