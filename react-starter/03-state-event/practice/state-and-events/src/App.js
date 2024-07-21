import './App.css';

const App = () => {
  const handleClickButton = (name) => {
    console.log('You have clicked the HELLO button!');
    alert(`Hello ${name}`);
  }

  // // tạo hàm mô phỏng 
  // const handleClickElement = () => {
  //   handleClickButton('James');
  // }

  const handleChangeInput = (event) => {
    console.log(`You have changed value input: ${event.target.value}`)
  }

  return (
    <div className="App">
      <input onChange={handleChangeInput}></input>
      <button style={{
        display: 'inline-block',
        width: '200px',
        height: '100px',
        marginTop: '50px'
      }}
        onClick={() => handleClickButton('James')}
      >Hello</button>
    </div>
  );
}

export default App;
