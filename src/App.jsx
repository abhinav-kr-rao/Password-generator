import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [numberYes, setNumberYes] = useState(false);
  const [charYes, setCharYes] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState(false);

  const generatePassword = useCallback(() => {

    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = '0123456789';
    const special = '!@#$%^&*()-_=+[]{}|;:,.<>/?';
    let pw = "";

    for (let i = 0; i < length; i++) {
      if (charYes) str += special;
      if (numberYes) str += nums
      const randIndex = Math.floor(Math.random() * (str.length) + 1);
      const char = str.charAt(randIndex);
      pw += char;
    }

    setPassword(pw);
  }, [length, numberYes, charYes])


  useEffect(() => {
    generatePassword();
  }, [numberYes, charYes, length, generatePassword])


  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setCopy((prev) => !prev);
  }

  return (
    <>
      <h1 className=' text-4xl text-violet-600'>
        Password generator
      </h1>

      <div className=" bg-green-500 w-auto rounded-3xl p-3 my-10">
        <div className=" py-4 flex">
          <input type="text"
            className=' text-black w-full bg-white p-2 mx-5  rounded-md'
            value={password}
            readOnly />
          <button onClick={copyPassword}>
            {copy ? 'Copied' : 'Copy'}
          </button>
        </div>
        <div className=" flex px-2 gap-3">
          <div className=" flex gap-2">
            <input type="range"
              min={6}
              max={100}
              value={length}
              className=' w-fit'
              onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div className=" flex  gap-2">
            <input type="checkbox" name="number" onClick={() => { setNumberYes((prev) => !prev) }} />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className=" flex  gap-2">
            <input type="checkbox" name="char" onClick={() => setCharYes((prev) => !prev)} />
            <label htmlFor="char">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
