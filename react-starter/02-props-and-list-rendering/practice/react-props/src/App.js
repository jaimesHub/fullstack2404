import './App.css';
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import Content from './layouts/Content';
import Footer from './layouts/Footer';

import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default App;
