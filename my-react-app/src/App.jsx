import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./assets/button";
import Input from "./assets/input";

function App() {
  return (
    <div>
      <ButtonComponent title="Submit" className="" style="" />
      <ButtonComponent className="borderBlack" />
      <Input />
    </div>
  );
}

export default App;
