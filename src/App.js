import "./App.css";
import Navigation from "./components/Navigation";
import Carousels from "./components/Carousels";
import Items from "./components/Items";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Carousels />
      <Items />
    </div>
  );
}

export default App;
