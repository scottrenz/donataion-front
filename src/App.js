import React, { useEffect, useState } from "react"
import Cards from './Cards'
// import axios from "./axios"
{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
async function getData() {
  let wait;
wait = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then (data =>   
    {
console.log(data)
      //  makeTabs(data.data.topics)
   return wait;}
)
  .catch (data => { 
    console.log('data error',data)
          }
           )
  }
getData();


function App() {
  const [display, setDisplay] = useState(0)

  return (
    <div className="container">
      <div className='top'>
        <Logo />
      </div>
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}

        {/* <Cards cards={cards} /> */}
        {/* <Numbers display={display} setDisplay={setDisplay} />
        <Operators display={display} setDisplay={setDisplay} />
        <Specials display={display} setDisplay={setDisplay} /> */}
      </div>
    </div>
  )
}

export default App
