import React from 'react'

const SingleCard = (props) => {
    const {title, totalNumber, icon, sideIcon, gain, color, time} = props.item;

  return (
    <div className="single_card">
        <div>
            <span className='side_icon'><i class={sideIcon}></i></span>
        </div>
    <div className="card_content">
      <h4>{title}</h4>
      <span>{totalNumber}</span>
      <p><span className='one' style={{color: color}}>{gain}</span> {time}</p>
    </div>

    <span className="card_icon"><i class={icon}></i></span>
  </div>
  )
}

export default SingleCard
