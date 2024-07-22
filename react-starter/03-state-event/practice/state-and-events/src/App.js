import { useState } from 'react';
import './App.css';

const App = () => {
  // const handleClickButton = (name) => {
  //   console.log('You have clicked the HELLO button!');
  //   alert(`Hello ${name}`);
  // }

  // // // tạo hàm mô phỏng 
  // // const handleClickElement = () => {
  // //   handleClickButton('James');
  // // }

  // const handleChangeInput = (event) => {
  //   console.log(`You have changed value input: ${event.target.value}`)
  // }

  // let number = 0;
  const [number, setNumber] = useState(0);

  // console.log(`Init number: ${number}`);

  const handleAdd = () => {
    // number += 1;
    // console.log('Add: ', number)
    setNumber(number + 1);
  }

  const handleSubtract = () => {
    // number -= 1;
    // console.log('Subtract: ', number)
    setNumber(number - 1);
  }

  const [isShowGreeting, setIsShowGreeting] = useState(false);

  const handleToggleShowGreeting = () => {
    setIsShowGreeting(!isShowGreeting);
  }

  const [students, setStudents] = useState([]);
  const handleAddStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name: `Student ${students.length + 1}`
    }

    // setStudents([...students, newStudent]); //  spread operator
    setStudents(prevStudents => [...prevStudents, newStudent]);
  }

  const [isLightRed, setIsLightRed] = useState(true);
  const [isLightYellow, setIsLightYellow] = useState(false);
  const [isLightGreen, setIsLightGreen] = useState(false);

  const handleNext = () => {
    if (isLightRed) {
      setIsLightRed(false);
      setIsLightYellow(true);
    } else if (isLightYellow) {
      setIsLightYellow(false);
      setIsLightGreen(true);
    } else {
      setIsLightGreen(false);
      setIsLightRed(true);
    }
  }

  return (
    <div className="App">
      {/* <input onChange={handleChangeInput}></input>
      <button style={{
        display: 'inline-block',
        width: '200px',
        height: '100px',
        marginTop: '50px'
      }}
        onClick={() => handleClickButton('James')}
      >Hello</button> */}

      {/* <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <button style={{
          display: 'inline-block',
          height: '30px'
        }} onClick={handleAdd}>Add(+)</button>
        <h1>{number}</h1>
        <button style={{
          display: 'inline-block',
          height: '30px'
        }} onClick={handleSubtract}>Subtract(-)</button>
      </div>
      <button style={{ display: 'inline-block', height: '30px' }}
        onClick={() => setIsShowGreeting(!isShowGreeting)}
      >
        Show message
      </button>
      {isShowGreeting && <h1>Hello everybody!</h1>} */}

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        marginTop: '12px'
      }}>
        <button onClick={handleNext} style={{
          width: '100px',
          height: '50px',
          backgroundColor: 'blue',
          color: 'white',
          borderRadius: '5px',
          border: 'none',
          marginRight: '12px'
        }}>Next</button>
        {isLightRed ? <div className='light' style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          borderRadius: "50%",
          border: '1px solid black'
        }}></div> : <div className='light' style={{
          width: "50px",
          height: "50px",
          // backgroundColor: "red",
          borderRadius: "50%",
          border: '1px solid black'
        }}></div>}

        {isLightYellow ? <div className='light' style={{
          width: "50px",
          height: "50px",
          backgroundColor: "yellow",
          borderRadius: "50%",
          border: '1px solid black'
        }}></div> : <div className='light' style={{
          width: "50px",
          height: "50px",
          // backgroundColor: "yellow",
          borderRadius: "50%",
          border: '1px solid black'
        }}></div>}

        {isLightGreen ? <div className='light' style={{
          width: "50px",
          height: "50px",
          backgroundColor: "green",
          borderRadius: "50%",
          border: '1px solid black'
        }}></div> : <div className='light' style={{
          width: "50px",
          height: "50px",
          // backgroundColor: "green",
          borderRadius: "50%",
          border: '1px solid black'
        }}></div>}
      </div>
    </div>

  );
}

export default App;
