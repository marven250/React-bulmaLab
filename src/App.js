import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Formfield from "./Components/Formfield"
import CoolButton from "./Components/CoolButton"

function App() {
  return (
    <div>
    <Navbar />
      <Formfield labeler="Name" placeHolderer= "e.g Alex Smith" typer= "text" />
      <Formfield labeler="Email" placeHolderer= "e.g. alexsmith@gmail.com" typer= "email"/>
      <CoolButton isSmall isDanger />
      <CoolButton isRounded isSuccess/>
    </div>
  );
}

export default App;
