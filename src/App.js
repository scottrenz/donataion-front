// import React from "react"
import React, { useEffect, useState } from "react"
import Cards from './Cards'
import Logo from './Logo'
import axios from 'axios'
// import axios from "./axios"
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components


function App() {
  const [imgData, setData] = useState(0)
  // useEffect(() => {}, []); // Not synced with any data, so this effect only fires once
  // function getData() {
  
    useEffect(() => {
      https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH
      // axios.get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH&date=2012-03-14')
      axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH')
      .then (data =>   
        {
    console.log(data)
    setData(data) 

    // .then(res => setDogPic(res.data.message))

    //  makeTabs(data.data.topics)
       }
    )
      .catch (data => { 
        console.log('data error',data)
              }
               )
              }, []);

    //           }
    // getData();
    

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
