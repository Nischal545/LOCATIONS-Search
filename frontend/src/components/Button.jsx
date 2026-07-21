import React from "react";

export default function Button({children, variant, index, ...props})
{
    // cycle engine array mapping back to our global root CSS variables

    const colorCycle = ['var(--color-blue)', 'var(--color-yellow)', 'var(--color-purple)']

    // defaults to blue if no index or variant is specified
    let backgroundColor = 'var(--color-blue)';
    let textColor = 'white';

    // if an explicit override is asked for (e.g., variant = "[payment]")

    if(variant === 'payment') {
        backgroundColor = 'var(--color-green)';
    }

    // otherwise, it it's running inside a loop container (.map), cycle colors perfectly 

    else if (index!==undefined) {
        backgroundColor = colorCycle[index % colorCycle.length];

        if(backgroundColor === 'var(--color-yellow)') textColor = 'black'; 
        // fix contrast
    }


    return (
        <button style = {{
            backgroundColor,
            color: textColor,
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
        }}
        {...props}
        >
            {children}
            
        </button>
    )
    
}