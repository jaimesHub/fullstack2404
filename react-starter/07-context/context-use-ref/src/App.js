import { useRef, useState } from 'react';
import './App.css';
import Component1 from './Component1';

function App() {
  const valueRef = useRef(10);
  console.log('valueRef: ', valueRef);

  const [valueState, setValueState] = useState(20);
  console.log("valueState: ", valueState);

  let valueNormal = 30;
  console.log("valueNormal: ", valueNormal);

  const handleChangeValueRef = () => {
    valueRef.current = valueRef.current + 1;
  }

  const handleChangeValueState = () => {
    setValueState(valueState + 1);
  }

  const handleChangeValueNormal = () => {
    valueNormal += 1;
  }

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const handleFocus = () => {
    // document.getElementById('myTxt').focus();
    inputRef1.current.focus();
  }

  const handleFocus2 = () => {
    inputRef2.current.focus();
  }



  return (
    <>
      <div className='App'>Context</div>
      <Component1 />

      <div className='App'>useRef</div>
      <div>
        <input id="myTxt" type='text' ref={inputRef1}></input>
        <button onClick={handleFocus}>Focus on input 1</button>
      </div>
      <div>
        <input id="myTxt" type='text' ref={inputRef2}></input>
        <button onClick={handleFocus2}>Focus on input 2</button>
      </div>
      <div>
        <button onClick={handleChangeValueRef}>Change valueRef</button>
        <button onClick={handleChangeValueState}>Change valueState</button>
        <button onClick={handleChangeValueNormal}>Change valueNormal</button>
      </div>
    </>
  );
}

export default App;
