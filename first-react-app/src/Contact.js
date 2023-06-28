import Piss from './Piss';
import chopper from "./chopper.jpg";
import lean from "./yunglean.png";

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
    emoji: lean,
  }]
    
export default function Contact () {
    return (<div>Contact! <Piss users={person}/> </div>);
}
