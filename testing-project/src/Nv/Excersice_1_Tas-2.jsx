// 2. create a react pure functional component that will take email address as an input and print whether it is a valid address or not.
import  { useState } from "react";

const EmailValidator = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };

  return (
    <div>
      <h2>Email Validator</h2>
      <input
        type="text"
        placeholder="Enter email address"
        value={email}
        onChange={handleChange}
      />
      {isValid !== null && (
        <p>
          The email address is{" "}
          <strong>{isValid ? "valid" : "not valid"}</strong>.
        </p>
      )}
    </div>
  );
};

export default EmailValidator;
