import Journals from "./pages/Journals";
import Timer from "./pages/Timer";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center space-y-16">
      <Timer />
      <Journals />
      <MenuBar />
    </div>
  );
}

export default App;
