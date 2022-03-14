import React from 'react'

function add(a, b){
    let sum = a+b
    return sum;
}

function sub(a, b){
    let sub = a-b
    return sub;
}

function mul(a, b){
    let mul = a*b
    return mul;
}

function div(a, b){
    let div = a/b
    return div;
}


const Calc = () => {
  return (
    <div>
        <h2>Calculations</h2>
        <ul>
            <li>the sum of two number is {add(2, 4)}</li>
            <li>the subtraction of two number is {sub(2, 4)}</li>
            <li>the multiplication of two number is {mul(2, 4)}</li>
            <li>the division of two number is {div(2, 4)}</li>
        </ul>
    </div>
  )
}

export default Calc;