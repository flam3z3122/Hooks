import React, { useState } from 'react'

const Hooks = () => {

    const [name , setName]=useState("Jitu")
    const [user, setUser]=useState({name:"Jitu", age: 22})

    const handelObjState =()=>{
        setUser((prevState)=>({
            ...prevState,
            name: "Nikhil",
            age: 30
        }))
    }

    const updateState = ()=>{
        setName("Sahil")
    }

  return (
    <div>
        <h1>Hooks-useState</h1>
        <h2>{name}</h2>
        <button onClick={()=>setName("Rohan")}>Change State using arrow func in same line</button>
        <br/>
        <button onClick={updateState}>Change State using arrow function</button>
        <br/>
        <h2>Hello, my name is {user.name} i am {user.age} years old</h2>
        <button onClick={handelObjState}>Change Object state</button>
    </div>
  )
}

export default Hooks


























// const [count, setCount] = useState(0)
//   const [name, setName] = useState('')
//   const [toggle, setToggle] = useState(false)

  // const [name2, setName3] = useState('')
  // const [name3, setName3] = useState('')

// useEffect( () => {                      // called in mouting + change in any state value
//   console.log("Called every time");
// })

// useEffect( () => {                    // (mouting + change in 'count' state only)
//   console.log("useEffect Called");
//   document.title = `Clicked ${count} Times`
// } , [count] )


// useEffect( () => {                    // ( Only called in mouting phase )
//   alert("Welcome to my webPage")
// } , [] )
