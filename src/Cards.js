import React from "react"

export default props => {
  const cStyle = {
    display: 'flex',
    margin: '100px',
    flexDiretion: 'column',
    justifyContent: 'space-around',
  }

  const iStyle = {
    display: 'flex',
    width: '50%',

  }

  let cHtml= props.src ? (<img alt='photo' src={props.src} style={iStyle}/>) : (<a href={props.url}>VIDEO</a>);
  return (
<div style={cStyle}>
    <div className='display'>{props.date}</div>
    {cHtml}
    <div className='display'>{props.expl}</div>
</div>
  )   
}
