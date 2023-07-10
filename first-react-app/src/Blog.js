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
    
export default function Blog () {
    return (
    <div> <Piss users={person} /> </div>
    );
}
