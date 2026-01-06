import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div className="min-h-screen bg-emerald-200 flex justify-center text-gray-800">
      <Timer />   
      <div className=" absolute bottom-5">
        {/* prettier-ignore */}
        <ul className="menu menu-horizontal bg-emerald-500 shadow-md shadow-emerald-600 rounded-box lg:space-x-3 lg:text-base text-gray-50">
          <li><a>stopwatch</a></li>
          <li><a>graph</a></li>
          <li><a>reflection</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
