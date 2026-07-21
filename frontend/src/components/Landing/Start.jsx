import React from "react";
import App from '../../App.jsx'
import './style.css';
import { useRef } from "react";
import LocationWord from "../LocationWord.jsx";
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import GetinPage from '../Getin/GetinPage.jsx'
import { useEffect } from "react";
import { useHeader } from "../HeaderContext.jsx";
import Button from "../Button.jsx";

function Start () {

    // const {setHeaderActions} = useHeader();

    // useEffect(() => {
    //     // teleport standard sign up .login buttons to the top header
    //     setHeaderActions (
    //         <>

            
    //         </>
    //     )
    // })

    const welcomeText = "WELCOME TO THE WORLD OF EXCITING"


    return (
        <>
        
            <div className="container">
                <div className="box">
                    <h3>{welcomeText}<span style={{fontSize: '80px'}}> <LocationWord />
                    </span>
                    <p>
                        <Link to = '/getinpage'>Click Here</Link>
                    </p>
                    </h3>
                </div>
            </div>
        
        </>
    )
}

export default Start;