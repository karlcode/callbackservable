import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import seeya from './seeya.png';
import './App.css';


function App() {
    let ref: any = useRef<HTMLCanvasElement>(null);
    let imageRef: any = useRef<HTMLImageElement>(null);
    const image = new Image();
    image.src = logo;

    // @ts-ignore
    function onClick(canvas, context, {x, y}) {
        context.drawImage(image, x, y)

    }

    function extract(imageSrc: string) {
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d");
        let hexString = "";
        let image = new Image();
        image.src = imageSrc;
        image.onload = function () {
            if (context) {
                context.drawImage(image, 0, 0, 400, 400);
                const imageData = context.getImageData(0, 0, 1, 1);
                console.log("the data is", imageData.data)
                // Converts rgba from getImageData 255 to hex
                let hex: string = "";
                for (let i = 0; i < 4; i++) {
                    hex += (imageData.data[i] | 1 << 8).toString(16).slice(1) //remove first char
                }
                console.log(hex)
                hexString = hex;
            }
        }
        return hexString;

    }

    useEffect(() => {
        console.log(extract(seeya))
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

function colorpick(image: HTMLImageElement, canvas: HTMLCanvasElement): string {
    //TODO ensure you can only use in browsers/ DOM support
    //SecurityError: Failed to execute 'getImageData' on 'CanvasRenderingContext2D': The canvas has been tainted by cross-origin data.
    if (canvas) {
        let context: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if (context) {
            //TODO ensure image isnt too large
            context.drawImage(image, 0, 0); //draw the image to the canvas
            let imageData: ImageData = context.getImageData(0, 0, 1, 1); //read the metadata from the drawn canvas r,g,b,a format
            console.log(context.getImageData(300, 300, 1, 1))
            return imageData.data.toString();
        }
    }

    return '123'
}

export default App;
