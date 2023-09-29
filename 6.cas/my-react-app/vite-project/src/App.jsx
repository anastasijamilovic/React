import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "./Container";
import Container2 from "./assets/Container2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container></Container>
      <Container2></Container2>
    </>
  );
}

export default App;
