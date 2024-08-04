import { useEffect, useState } from "react";
import Count from "./Count";
import StudentList from "./Students";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  const [showCount, setShowCount] = useState(true);
  const [page, setPage] = useState(1);

  console.log("Content ouside of useEffect");

  //TODO useEffect will be run after component is already rendered
  //TODO dependencies array

  // useEffect(callback) is the same as componentDidMount, componentDidUpdate, and componentWillUnmount combined
  // useEffect(() => {
  //   console.log("Content in useEffect"); // This will run after the first render
  // });

  // useEffect(callback, []) is the same as componentDidMount
  // useEffect(() => {
  //   console.log("Content in useEffect"); // This will run after the first render
  // }, []); // Empty array means it will run only once after the first render

  // useEffect(() => {
  //   // console.log("Content in useEffect"); // This will run after the first render

  //   const heading = document.getElementById("heading"); // null because the element is not rendered yet
  //   heading.innerHTML = "T3H";
  // });

  // console.log("Content outside of useEffect"); // It will be printed before content in useEffect is printed

  // useEffect(callback, [value]) is the same as componentDidUpdate

  // const heading = document.getElementById("heading"); // null because the element is not rendered yet
  // heading.innerHTML = "T3H";

  // useEffect(() => {
  //   console.log("useEffect without dependency array");
  // }); // will be run after every render

  // useEffect(() => {
  //   console.log("useEffect with dependency array is empty");
  // }, []); // will be run only once after the first render

  // useEffect(() => {
  //   console.log("useEffect with dependency array is [count2]");
  // }, [count2]); // will be run after every render if count2 is changed

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}&limit=5`);
    const data = await response.json();
    console.log(data);
  }

  // fetchData();

  // call once time
  // useEffect(() => {
  //   console.log("useEffect with empty dependency array");

  //   fetchData();
  // }, []);

  useEffect(() => {
    console.log("useEffect with empty dependency array");

    fetchData();
  }, [page]);

  return (
    <div id="container">
      {/* <h1>Count 1</h1>
      <h1 id="heading">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment 1</button>

      <h1>Count 2</h1>
      <h1 id="heading">{count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>Increment 2</button> */}

      {/* {showCount ? <Count /> : null} */}
      {/* {(showCount && true) && <Count />} */}
      {/* {showCount && <Count />}
      <button onClick={() => setShowCount(!showCount)}>Toggle ShowCount</button> */}
      <StudentList />
    </div>
  );
}

export default App;