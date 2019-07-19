import React, { useEffect, useState } from "react"
import Cards from './Cards'
import {Style, H1Style} from './Cards'
import Logo from './Logo'
import axios from 'axios'
import { tsPropertySignature } from "@babel/types";

function App() {
  const [imgData, setData] = useState(0)
  const [datData, setDat] = useState(0)
  
// //   function getDate(param){
// // return props.date
//   }

    useEffect(() => {
      // https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH
      axios.get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH')
      // axios.get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH&date=2019-07-17')
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

  return (
    <div className="container">
      <Style className='top' >
        <Logo />
      </Style>
      <div className="App" >
        <H1Style>NASA Image of the Day</H1Style>
        <Cards date={imgData.date} expl={imgData.explanation} src={imgData.hdurl} url={imgData.url}/>
      </div>
    </div>
  )
}

export default App
