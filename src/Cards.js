import React from "react"
import styled from 'styled-components'

const Div = styled.div`

  display: flex;
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

export default props => {

  let cHtml= props.src ? (<Img alt='photo' src={props.src} />) : (<a href={props.url}>VIDEO</a>);
  return (
<Div >
    <Date className='display'>Nasa Image day: {props.date}</Date>
    {cHtml}
    <Expl className='display'>{props.expl}</Expl>

</Div>
  )   
}
