import Journals from "./components/Journals/Journals";
import Timer from "./components/Timer/Timer";
import MenuBar from "./components/ui/MenuBar";

function App() {
  return (
    <div className="min-h-screen bg-emerald-200 flex flex-col items-center text-gray-800">
      <Timer />
      <Journals/>
      <MenuBar/>
    </div>
  );
}

export default App;
