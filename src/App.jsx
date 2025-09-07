import { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import Glowup from "./components/Glowup";
import Stats from "./components/Stats";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden ">
      <Home />
      <Glowup />
      <Stats />
      <Properties />
      <Testimonials />
    </div>
  );
}

export default App;
