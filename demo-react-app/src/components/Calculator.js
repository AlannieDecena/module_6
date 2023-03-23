import React from 'react'

export default function Calculator() {
    //need to store 
    const [firstNum, setFirstNum] = React.useState('')
    const [secondNum, setSecondNum] = React.useState('')
    const [operator, setOperator] = React.useState('')
    const [result, setResult] = React.useState('')

function calculation () {
   let first = parseInt(firstNum) 
   let second = parseInt(secondNum) 
    // setResult(first +second )
    console.log(firstNum, secondNum )
   let resultFunction 
    switch (operator) {
        case '+':
            resultFunction = first + second;
            break;
        case '/':
            resultFunction = first / second;
            break;
        case '*':
            resultFunction = first * second ;
            break;
        case '-':
            resultFunction = first - second;
            break;
    }
    setResult(resultFunction)
    
}
   

  return (
    <div className="componentBox" >
        <h3>Calculator</h3>

        <input name="num1" id="num1" type="number" onChange={(e) => setFirstNum(e.target.value)}/>
        <input name="num2" id="num2" type="number" onChange={(e) => setSecondNum(e.target.value)} />

        <button onClick={() => calculation()}>=</button>
        <button onClick={() => setOperator('+')}>+</button>
        <button onClick={() => setOperator('-')}>-</button>
        <button onClick={() => setOperator('*')}>*</button>
        <button onClick={() => setOperator('/')}>/</button>
        <h2>{result}</h2>
        

    </div>
  )
}
