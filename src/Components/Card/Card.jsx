import React, { useState} from 'react'
import ComponentCard from './ComponentCard'
import UseWordsString from './UseWordsString';
import wordStore from '../../Store/WordStore';


function Card() {

    const {appData} = wordStore

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCardClicked, setIsCardClicked] = useState(false);
    const {addWord,wordsString} = UseWordsString();
    
    const handleNextClick = () => {
        const myWord = appData[currentIndex];
        console.log(myWord)
        addWord(myWord);
        setCurrentIndex((prevIndex) => (prevIndex === appData.length - 1 ? 0 : prevIndex + 1))
        setIsCardClicked(true); 
        localStorage.setItem('myWordsList', JSON.stringify(wordsString));
    }

    const handlePreviousClick = () => {
        setCurrentIndex((prevIndex) => (currentIndex ===0 ? appData.length - 1  : prevIndex - 1))
        setIsCardClicked(false)}    

    const handleCardClick = () => {
        setIsCardClicked(true); 
    }

    return (
    <div className='container-card'>
        <button onClick={handlePreviousClick} className='button'>&#11164;</button>
        <ComponentCard
            key={appData[currentIndex].id}
            english={appData[currentIndex].english}
            transcription={appData[currentIndex].transcription}
            russian={appData[currentIndex].russian}
            isClicked={isCardClicked}
            handleClick={handleCardClick}
    />           
        <button onClick={handleNextClick}  className='button'>&#11166;</button>
    </div>           
)
}

export default Card;
