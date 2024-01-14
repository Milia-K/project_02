import React from 'react'
import check_mark from '../assets/check_mark.png'
import star from '../assets/star.png'
import './Folder.css'

function Folder() {

    const handleAddWordStar = () => {
        console.log('слова для повторения')
    }
    
    const handleAddWordCheckMark = () => {
        console.log('выученные слова')
    }

  return (
    <div className='folder'>
        <img src={check_mark} className='check_mark' alt='word' onClick={handleAddWordCheckMark} ></img>
        <img src={star} className='star' alt='word' onClick={handleAddWordStar}></img>
    </div>
  )
}

export default Folder


