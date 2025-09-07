import { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import Glowup from "./components/Glowup";
import Stats from "./components/Stats";
import Properties from "./components/Properties";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden ">
      <Home />
      <Glowup />
      <Stats />
      <Properties />
    </div>
  );
}

export default App;
