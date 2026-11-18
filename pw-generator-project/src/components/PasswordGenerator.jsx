//this component used to have the logic and the JSX but the logic went into the custom hook file called usePasswordGenerator.js

import usePasswordGenerator from "../hooks/usePasswordGenerator";

const PasswordGenerator = () => {
    //these are all the variables from the original logic that are used inside the JSX below
    const {
    length,
    setLength,
    numberAllowed,
    setNumberAllowed,
    characterAllowed,
    setCharacterAllowed,
    password,
    copied,
    passwordRef,
    handleGeneratePassword,
    handleCopyPassword,
    getPasswordStrength,
    } = usePasswordGenerator();

return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-center mb-8">Password Generator</h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Generated Password
            </label>
            <div className="flex gap-2">
            <input
              ref={passwordRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="text"
              placeholder="Your password will appear here"
              value={password}
              readOnly
            />
            <button type="button" onClick={handleCopyPassword} disabled={!password} className="bg-gray-800 hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shrink-0">{copied ? 'Copied' : 'Copy'}</button>
            </div>
          </div>
          <div className="mb-4">
            {/*I am using getPasswordStrength() several times below. It's to help 
            me better understand how to store this component's logic in a separate file
            (a customm hook). Otherwise, I could have put getPasswordStrength into a variable called
            "const strength" to shorten code to "strength.tip" (for example)*/}
            <p title={getPasswordStrength().tip} className={`mb-3 cursor-help font-bold ${getPasswordStrength().color}`}>Password Strength: {getPasswordStrength().label} ⓘ</p>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="length">
              Password Length: {length}
            </label>
            <input
              className="w-full"
              id="length"
              type="range"
              min="6"
              max="20"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))} //wrapped in Number() just in case (e.target.value) returns a string instead of a number
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="accent-blue-500 w-4 h-4"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(!numberAllowed)}
              />
              <span className="ml-2">Include Numbers</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="accent-blue-500 w-4 h-4"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed(!characterAllowed)}
              />
              <span className="ml-2">Include Special Characters</span>
            </label>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="button" onClick={handleGeneratePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;