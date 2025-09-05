import { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import Glowup from "./components/Glowup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden ">
      <Home />
      <Glowup />
    </div>
  );
}

export default App;
