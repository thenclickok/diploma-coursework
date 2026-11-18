//this file (custom hook as it starts with "use") is all the logic taken out of the PasswordGenerator component

import { useState, useCallback, useRef } from "react";

const usePasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null); //useRef hook to create a reference to the password input field

  /*useCallback "wraps" the handleGeneratePassword function. It saves this function in memory so it's not re-created
  on every render, only when its dependencies change. This feature is more useful when changes are frequent like when the 
  generated password changes with a slider or input field rather than the user clicking a button to generate a new one*/
  const handleGeneratePassword = useCallback(() => {
    let generatedPassword = "";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      charset += "0123456789";
    }
    if (characterAllowed) {
      charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length); //picking a random index number between 0 and the last character in the charset string
      generatedPassword += charset[randomIndex]; //adding the character at the random index to the generated password
    }
    setPassword(generatedPassword);
    setCopied(false); //reset copied state when a new password is generated
  }, [length, numberAllowed, characterAllowed]);

  const handleCopyPassword = useCallback(() => {
    if (!password) return;

    passwordRef.current?.select(); //highlights the text (password) inside the input box
    navigator.clipboard.writeText(password); //the browser's built-in navigator.clipboard.writeText() API for adding Copy to Clipboard functionality
    setCopied(true);

    //reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [password]);

  const getPasswordStrength = () => {
    let score = 0;

    if (length >= 8) score += 1;
    if (length >= 12) score += 1;
    if (numberAllowed) score += 1;
    if (characterAllowed) score += 1;

    if (score <= 1) {
      return {
        label: "Weak",
        tip: "Try increasing the length to at least 8 characters and adding numbers or symbols.",
        color: "text-red-500",
      };
    }
    if (score <= 3) {
      return {
        label: "Medium",
        tip: "Good start! Adding more characters, numbers or symbols can make it stronger.",
        color: "text-yellow-500",
      };
    }
    return {
      label: "Strong",
      tip: "Great job! Your password is strong.",
      color: "text-green-500",
    };
  };

  return {
    //all the variables to be used in the JSX of the PasswordGenerator component
    length,
    setLength,
    numberAllowed,
    setNumberAllowed,
    characterAllowed,
    setCharacterAllowed,
    password,
    copied,
    passwordRef,
    handleGeneratePassword, //contains setPassword
    handleCopyPassword, //contains setCopied
    getPasswordStrength,
  };
};

export default usePasswordGenerator;
