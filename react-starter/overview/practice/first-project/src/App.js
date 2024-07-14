import { Fragment } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import "./App.css";
const App = () => {
  // const tagH2 = <h2>JSX can be written by HTML in JS code</h2>;
  // const number = 10;

  // const testFn = () => {
  //   return "testFn";
  // }

  // return (
  //   <div>
  //     <h1>My first React project!</h1>
  //     {tagH2}
  //     {number}
  //     {testFn()}
  //   </div>
  // );

  // return <h1 className="heading paragraph">Heading</h1>

  // css inline
  const cssInline = {
    color: 'red',
    fontSize: 54 // default: px
    // fontSize: '54%' // or '54rem'
  };

  return (
    <Fragment>
      <Header />
      <Navigation></Navigation>
      <Sidebar />
      <h1 style={cssInline} className="heading paragraph">
        Heading
      </h1>
      <h2 className="heading-h2">More element h2</h2>
      <Footer />
    </Fragment>
  );

  // return (<h1 style={{ color: 'red', fontSize: '54px' }} className="heading paragraph">Heading</h1>)
}

export default App;