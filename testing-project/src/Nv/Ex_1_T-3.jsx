// create a react pure functional component  that will toggle the visibility of the text written by user ,
//  take one text box and one button , button will toggle the visibility when text is visible button text should be
//  " hide text " when text is hidden button text should be " show text ".


import  { useState } from "react";

const ToggleTextVisibility = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Toggle Text Visibility</h2>
      <input
        type="text"
        placeholder="Enter your text here"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleToggle}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
      {isVisible && text && (
        <p>
          <strong>Your Text:</strong> {text}
        </p>
      )}
    </div>
  );
};

export default ToggleTextVisibility;
