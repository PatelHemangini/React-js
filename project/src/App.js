// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./../src/Component/Header";
import Slider from "./Component/Slider.jsx";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
   <>
   <Header />
   <h1>hello</h1>
   <Slider/>
   </>
  );
}

export default App;
