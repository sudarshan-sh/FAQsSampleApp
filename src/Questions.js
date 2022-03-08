import React, { useState } from 'react';
import {AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Questions = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='article-questions'>
        <header>
            <h4 className='article-title'>{title}</h4>
            <button className='info-btn' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        <div className="info">{ showInfo && <p className='info-show'>{info}</p> }</div>
    </article>
  )
}

export default Questions;