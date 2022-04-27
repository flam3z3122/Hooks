import React, { useEffect, useState } from 'react'

const TestUserEffect = () => {

    const [a , setA] =useState("abc");
    const [b, setB]= useState("xyz")

    // useEffect(()=>{
    //     console.log("useeffect called");    // working as componentdidmount and componentdidupdate
    // })   

    // useEffect(()=>{
    //     console.log("useeffect called"); 
    // },[])       //working like componentdidmount only

    useEffect(()=>{
        console.log("useeffect called"); 
    },[a])       //will work for componentdidmount and componentdidupdate for {a} state variable



    //componentWillUnmount : cleanup function is useEffect
    useEffect(()=>{
        console.log("Going to die");

        return function cleanup(){
            console.log("useEffect behaving like componentWillunmount");
        }
    })

  return (
    <div>
        <h1>This is useEffectHook</h1>
        <p>Value of state variable A = {a}</p>
        <p>Value of state variable b = {b}</p>
        <button onClick={()=>setA("Hello")}>Update the state value of A</button>
        <button onClick={()=>setB("World")}>Update the state value of B</button>
        
    </div>
  )
}

export default TestUserEffect