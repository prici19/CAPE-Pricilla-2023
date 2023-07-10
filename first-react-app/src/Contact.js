import React from "react";
import { useState } from "react";
import "./Contact.css";


export default function Contact(){
    const [name, setName] = useState(""); // Used to keep track of the name inputted
    
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Used to keep track of whether the button is clicked
    const [submitted, setSubmitted] = useState(false); 
    
    // Function created to "submit" the form when the button is clicked
    const submit = () => {
        if (!submitted) { // if not submitted
            alert(name +'; ' + selectedOptions); 
            setSubmitted(true); // Tells the website the data was already submitted
        } else {
            alert('Already submitted!')
        }
    }

    // Changes the value of the selected options 
    const change_selected = (event) => {
        const val = event.target.value; // Finds which checkbox was clicked

        if (!selectedOptions.includes(val)) { // Makes sure duplicates aren't getting added

            // Makes sure the checkbox is checked and the value is actually in the array
            if (event.target.checked) setSelectedOptions([...selectedOptions, val]);
        } else if (!event.target.checked) { 

            // Makes a copy of the array and deletes val from it
            const copy = [...selectedOptions];
            copy.splice(copy.indexOf(val), 1);

            setSelectedOptions(copy);
        }
    }

    return (
        <div className="parentbox"> 

            <div className="bigbox"> {/* div used to hold all the inner elements */}
                <h1>Contact Me!</h1>
                <p>
                    Name:&nbsp;
                    {/* The input text box that contains the name */}
                    <input onChange={(event) => setName(event.target.value)} value={name}/>
                </p>
                <p>
                    Reason for contact: <br/>

                    {/* First input checkbox */}
                    <input onClick={change_selected} type="checkbox" id="reason1" name="reason1" value="Question"/>
                    <label for="reason1"> I have a question</label><br/>

                    {/* Second input checkbox */}
                    <input onClick={change_selected} type="checkbox" id="reason2" name="reason2" value="Learn More"/>
                    <label for="reason2"> To learn more about you</label><br/>

                    {/* Third input checkbox */}
                    <input onClick={change_selected} type="checkbox" id="reason3" name="reason3" value="Want to Chat"/>
                    <label for="reason3"> I just want to chat!</label><br/>

                    <br/>
                    <button onClick={submit}>Submit</button>
                </p>
            </div>
        </div>
    );
}