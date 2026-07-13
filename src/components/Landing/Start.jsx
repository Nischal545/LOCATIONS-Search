import React from "react";
import App from '../../App.jsx'
import './style.css';
import { useRef } from "react";
import LocationWord from "../LocationWord.jsx";
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage.jsx'


function Start () {

    const welcomeText = "WELCOME TO THE WORLD OF EXCITING"


    return (
        <>
        
            <div className="container">
                <div className="box">
                    <h3>{welcomeText}<span style={{fontSize: '80px'}}> <LocationWord />
                    </span>
                    <p>
                        <Link to = '/loginpage'>Click Here</Link>
                    </p>
                    </h3>
                </div>
            </div>
        
        </>
    )
}

export default Start;