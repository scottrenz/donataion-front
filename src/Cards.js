import React from "react"
import styled from 'styled-components'

  

// import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
// import "semantic-ui/dist/semantic.min.css";


const Div = styled.div`

  display: block;
  margin: 100px;
  flexDiretion: column;
  justifyContent: space-around;
`;

const Img = styled.img`

  display: flex;
  width: 50%;
`;

const Date = styled.div`

  display: flex;
  width: 10%;
`;

const Expl = styled.div`

  margin: 10px;
  display: flex;
  width: 50%;
`;

const Blink = styled.a`

  animation:blinkingText 0.8s infinite;
}
@keyframes blinkingText{
  0%{     color: #000;    }
  49%{    color: transparent; }
  50%{    color: transparent; }
  99%{    color:transparent;  }
  100%{   color: #000;    }
  ::selection {
  color: #000;
  }
`;

export const Style = styled.div`

display: flex;
marginTop: 10px;

`;

export const H1Style = styled.h1`

justifyContent: center;
margin: 100px;

`;
// const Form = styled.form;
function showdata (item,ix,arr) {
return (
<div>
  <div>arr[ix].id</div>
  <div>arr[ix].username</div>
  <div>arr[ix].password</div>
  </div>
)
}
export default props => {

  // let cHtml= props.src ? (<Img alt='photo' src={props.src} />) : (<Blink href={props.url}>VIDEO click to see video</Blink>);
  return (
<Div >
{props.data.map(showdata)}
    <Expl className='display'>{props.data}</Expl>

</Div>
  )   
}
