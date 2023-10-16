import { useState } from "react";

const CounterList = () => {
  const [pharagraphs, setPharagraphs] = useState([]);

  return (
    <div>
      <button onClick={addPharagraph}>add pharagraph</button>
      {pharagraphs}
    </div>
  );
};

export default CounterList;
