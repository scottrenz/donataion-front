import React, { useEffect, useState } from "react"
import Cards from './Cards'
// import {Style, H1Style} from './Cards'
import {Style} from './Cards'
import Logo from './Logo'
import axios from 'axios'
import Form from './Form'


function App() {
  const [imgData, setData] = useState(0)
  const today = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1)< 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)) + '-' + ((new Date().getDate() + 0)< 10 ? ('0' + (new Date().getDate() + 0)) : (new Date().getDate() + 0))
 
  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
  function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

let dayDate = getUrlParam('date',today);

useEffect(() => {
  // let dataArr =[]
  // https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH
      // axios.get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH')
      // axios.get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH&date=' + dayDate)
      // axios.get('https://swapi.co/api/people/?page=1')
      axios.get('https://api.nasa.gov/planetary/apod?api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH&date=' + dayDate)
      // https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31
      // axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=awlI2QgBkvZtjasfaTqkmYUtoyGU6vfQLcsgQVmH')
      // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
      // axios.get('https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31')
      .then (data =>   
        {
          // dataArr.push(data)
          setData(data.data) 
       }
    )
      .catch (data => { 
        console.log('data error',data)
              }
               )
              }, []);
              // console.log(dataArr)

  return (
    <div className="container">
      <Style className='top' >
        <Logo />
      </Style>
      <Form />
       <div className="App" >
        {/* <H1Style>NASA Image of the Day</H1Style> */}
        <Cards date={imgData.date} expl={imgData.explanation} src={imgData.hdurl} url={imgData.url} />
      </div>
    </div>
  )
}

export default App
