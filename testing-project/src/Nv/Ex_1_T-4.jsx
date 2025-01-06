import  { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Character Counter</h2>
      <input
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={handleChange}
      />
      <p>
        <strong>Total Characters:</strong> {text.length}
      </p>
    </div>
  );
};

export default CharacterCounter;
