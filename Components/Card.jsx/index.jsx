import React from 'react'
import styles from './style.modules.css'

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} 
            className="card_img" height="300px"
          />
          <div className="Card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank"/>
            <button> Watch Now </button>
            <a/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card;
