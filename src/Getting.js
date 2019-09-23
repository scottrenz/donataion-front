import React, { useEffect, useState } from "react"
// import {Style, H1Style} from './Cards'
import {Style} from './Cards'
import Logo from './Logo'
import axios from 'axios'


async function Getting() {
//   const [imgData, setData] = useState(0)
  let userdata = localStorage.getItem('userdata')
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
let req = {username: username, password: password}
let res = {header: {"Access-Control-Allow-Origin": "http://localhost:3000",
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}}
axios.defaults.withCredentials = false
console.log('req',req)

await axios.post('https://donation-management.herokuapp.com/donate/register/user' ,req,res)
.then (data =>   
        {
          console.log('data',data)          // dataArr.push(data)
        //   setData(data.data) 
       }
    )
      .catch (data => { 
        console.log('data error',data)
              }
               )
              // }, []);
              await axios.post('https://donation-management.herokuapp.com/donate/login' ,req,res)
              .then (data =>   
                {
                  console.log('data',data)          // dataArr.push(data)
                //   setData(data.data) 
               }
            )
              .catch (data => { 
                console.log('data error',data)
                      }
                       )
                      // }, []);
                      await axios.get('https://donation-management.herokuapp.com/donate' ,req,res)
                      .then (data =>   
                        {
                          console.log('data',data)          // dataArr.push(data)
                          localStorage.setItem('userdata',data.data) // setData(data.data) 
                       }
                    )
                      .catch (data => { 
                        console.log('data error',data)
                              }
                               )
                            //   }, []);
function showme (item,ix,ar) {
 return   <div>{ar[ix].username}</div>
}
  return (
    <div className="container">
      <Style className='top' >
        <Logo />
      </Style>
      {/* <Form /> */}
       <div className="App" >
        {/* <H1Style>NASA Image of the Day</H1Style> */}
      {/* {imgData.map(showme) } */}
{localStorage.getItem('userdata')}
      </div>
    </div>
  )
}

export default Getting
