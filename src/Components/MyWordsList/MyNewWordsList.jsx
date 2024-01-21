import React, {useState, useEffect} from 'react'
import './myNewWordsList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRotateRight} from '@fortawesome/free-solid-svg-icons'

const MyNewWordsList = () => {

const [savedWords, setWordsString] = useState({});

    const getSavedWords = () => {
        const savedWords = JSON.parse(localStorage.getItem('myWordsList'));
        if (savedWords) {
            setWordsString(savedWords);
        }        
    };

    const resetSavedWords = () => {
        setWordsString('')
    }

    return (
        <div className='myWordsList'>          
            <h3>My new words </h3>
            <button className='button_savedWords' onClick={getSavedWords}>  <FontAwesomeIcon icon={faCheck} /> </button>
            <button className='button_savedWords' onClick={resetSavedWords}> <FontAwesomeIcon icon={faArrowRotateRight} /></button>
                <div className='listSaveWords'>
                    <ul>
                    {Object.values(savedWords).map((word, id) => (
                        <li key={id}>{word}</li>
                    ))}
                    </ul>
                </div>
        </div>
    );
};

export default MyNewWordsList
