import React, { useEffect, useState } from "react";
import "./App.css";

import DragNDrop from "./components/DragNDrop";

const defaultData = [
  { title: "group 1", items: ["1", "2", "3"] },
  { title: "group 2", items: ["4", "5"] },
];

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    if (localStorage.getItem("List")) {
      setData(JSON.parse(localStorage.getItem("List")));
    } else {
      setData(defaultData);
    }
  }, [setData]);
  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data} />
      </header>
    </div>
  );
}

export default App;
