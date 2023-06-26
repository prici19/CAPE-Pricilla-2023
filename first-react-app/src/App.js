import React from 'react';
import ReactDOM from 'react-dom';
import Pee from './Pee';
import chopper from "./chopper.jpg";
import lean from "./yunglean.png"

const person = [{
  name: "Pricilla",
  email: "pitorres41@gmail",
  age: "20",
  emoji: chopper,
},
{
  name:"Grandpa",
  email:"coolpaw@gmail.com",
  age: "69",
  emoji:lean,
}]

function App() {
return <Pee users={person}/>
}
export default App;