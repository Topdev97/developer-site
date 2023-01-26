import React from 'react'

export const BubbleLoader = (props:{width:number,height:number,gap:number}) => {
  return (
    <div className={`bubble-loader`} style={{gap:props.gap}}>
        <div className="bubble" style={{width:props.width, height:props.height}}></div>
        <div className="bubble" style={{width:props.width, height:props.height}}></div>
        <div className="bubble" style={{width:props.width, height:props.height}}></div>
    </div>
  )
}
