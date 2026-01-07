import Journals from "./components/Journals/Journals";
import Timer from "./components/Timer/Timer";
import MenuBar from "./components/ui/MenuBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center space-y-16">
      <Timer />
      <Journals/>
      <MenuBar/>
    </div>
  );
}

export default App;
