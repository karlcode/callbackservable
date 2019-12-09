import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import seeya from './seeya.png';
import './App.css';
import {extract, getBlurColor} from "./extract";


function App() {
    const getBlur = getBlurColor(seeya);
    useEffect(() => {
        console.log(getBlur)
    })
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
        ;
}

export default App;
