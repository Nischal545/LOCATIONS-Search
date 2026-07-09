import React from "react";
import App from '../../App.jsx'
import './style.css';
import { useRef } from "react";
// import  { createRoot } from 'react-dom/client'


function Start () {

    const welcomeText = "WELCOME TO THE WORLD OF EXCITING"
    const lastWelcomeText = "LOCATIONS!"
    var colors = ['red', 'pink', 'blue', 'green', 'yellow', 'skyblue', 'grey', 'red', 'pink']

    // const p = document.getElementById('locations-text');
    // const text = p.textContent;

    const modifiedLastWelcomeText = lastWelcomeText.split("").map((letter, index)=>(
        <span key={index} style={{color: colors[index % colors.length]}}>{letter}</span>
    ))

    console.log(modifiedLastWelcomeText)


    return (
        <>
        
            <div className="container">
                <div className="box">
                    <p>{welcomeText}<span> {modifiedLastWelcomeText}
                    </span></p>
                </div>
            </div>
        
        </>
    )
}

export default Start;