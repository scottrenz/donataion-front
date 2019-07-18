import React, { useEffect, useState } from "react"
import Cards from './Cards'
import Logo from './Logo'
import axios from 'axios'

function App() {
  const [imgData, setData] = useState(0)
  
    useEffect(() => {
      // https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH
      axios.get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH')
      // axios.get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH&date=2012-03-14')
      // https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31
      // axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH')
      // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
      // axios.get('https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31')
      .then (data =>   
        {
          setData(data.data) 
       }
    )
      .catch (data => { 
        console.log('data error',data)
              }
               )
              }, []);
    const style ={
      display: 'flex',
      marginTop: '10px',
    }
    const hStyle ={
    justifyContent: 'center',
    margin: '100px',
    } 

  return (
    <div className="container">
      <div className='top' style={style}>
        <Logo />
      </div>
      <div className="App" >
        <h1 style={hStyle}>NASA Image of the Day</h1>
        <Cards date={imgData.date} expl={imgData.explanation} src={imgData.hdurl} url={imgData.url}/>
      </div>
    </div>
  )
}

export default App
