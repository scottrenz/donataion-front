import React, { useEffect, useState } from "react"
import Cards from './Cards'
// import {Style, H1Style} from './Cards'
import {Style} from './Cards'
import Logo from './Logo'
import axios from 'axios'
import Form from './Form'


function App() {
  const [imgData, setData] = useState(0)
  useEffect(() => {

  const today = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1)< 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)) + '-' + ((new Date().getDate() + 0)< 10 ? ('0' + (new Date().getDate() + 0)) : (new Date().getDate() + 0))
 
  function getUrlVars() {
    var vars = {};
     window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
     function(m,key,value)
     {
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
const username = localStorage.getItem('username')
const password = localStorage.getItem('password')
let req = {username: username, password: password}
let res = {header: {"Access-Control-Allow-Origin": "http://localhost:3000",
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}}
axios.defaults.withCredentials = true
console.log('req',req)

axios.post('http://localhost:5000/api/register' ,req,res)
.then (data =>   
        {
          console.log('data',data)          // dataArr.push(data)
          setData(data.data) 
       }
    )
      .catch (data => { 
        console.log('data error',data)
              }
               )
              // }, []);
              axios.post('http://localhost:5000/api/login' ,req,res)
              .then (data =>   
                {
                  console.log('data',data)          // dataArr.push(data)
                  setData(data.data) 
               }
            )
              .catch (data => { 
                console.log('data error',data)
                      }
                       )
                      // }, []);
                      axios.get('http://localhost:5000/api/users' ,req,res)
                      .then (data =>   
                        {
                          console.log('data',data)          // dataArr.push(data)
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
        
        {/* <Cards username={imgData.username} password={imgData.password} data={imgData} /> */}
      </div>
    </div>
  )
}

export default App
