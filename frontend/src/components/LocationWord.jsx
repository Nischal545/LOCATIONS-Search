import React from "react";

function LocationWord() {


    const lastWelcomeText = "LOCATIONS!"
    var colors = ['red', 'pink', 'blue', 'green', 'yellow', 'skyblue', 'grey', 'red', 'pink']


    const modifiedLastWelcomeText = lastWelcomeText.split("").map((letter, index)=>(
        <span key={index} style={{color: colors[index % colors.length]}}>{letter}</span>
    ))
    return(
        <div style = {
            {   display: 'inline-block',
                height: 'fit-content',
                fontSize: '40px',
                backgroundColor: 'black',
                cursor: 'pointer'
            }
        }>
            {modifiedLastWelcomeText}
        </div>
    ) 
}

export default LocationWord;