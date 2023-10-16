import { useState } from "react";

const TextInput = ({ onChange }) => {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
    onChange(e.target.value);
  };

  return <input type="text" value={input} onChange={handleChange} />;
};

export default TextInput;
