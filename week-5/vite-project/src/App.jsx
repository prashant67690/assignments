import React from "react";
import Card from "./Card";
import "./App.css";

function App() {
  let arr = ["Iconic", "OpenSource", "AppDev"];
  return (
    <>
      <Card
        name="Lokeshwar"
        description="A Ta in the 100xdevs cohort 2.0"
        arr={arr}
      ></Card>
    </>
  );
}

export default App;
