import { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyPassword = () => {
    if (!password) return;

    navigator.clipboard.writeText(password);//the browser's built-in navigator.clipboard.writeText() API for adding Copy to Clipboard functionality
    setCopied(true);

    //reset copied state after 2 seconds
    setTimeout(() => { 
        setCopied(false);
    }, 2000);
  }; 


  const handleGeneratePassword = () => {
    let generatedPassword = ''; 
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
     if (numberAllowed) {
       charset += '0123456789';
     };
     if (characterAllowed) {
        charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
     };
     for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);//picking a random index number between 0 and the last character in the charset string 
        generatedPassword += charset[randomIndex]; //adding the character at the random index to the generated password 
    };
    setPassword(generatedPassword);
    setCopied(false); //reset copied state when a new password is generated
  };

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
              onChange={(e) => setLength(e.target.value)}
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