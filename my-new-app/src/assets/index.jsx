import { useState } from "react";

const Class13 = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <TextInput onChange={(text) => console.log(text)} />
      <ListManipulation />
    </div>
  );
};

export default Class13;
