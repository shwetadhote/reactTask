import React from 'react'
import styles from './style.modules.css'

let currentDate = new Date();
currentDate = currentDate.getHours();
let greeting = "";
const cssStyle = {};

if (currentDate >= 1 && currentDate < 12){
    greeting = ("Good Morning");
    cssStyle.color = "darkblue"
} else if (currentDate >= 12 && currentDate < 19){
    greeting = ("Good Evening");
    cssStyle.color = "orange"
} else {
    greeting = ("Good Night")
    cssStyle.color = "purple"
}

const Greetings = () => {
  return (
    <>
    <div>
        <h1 >Hello! <span style={cssStyle} >{greeting} </span></h1>
    </div>
    </>
  )
}

export default Greetings