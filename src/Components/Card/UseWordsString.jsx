import { useState } from 'react';

const useWordsString = () => {
    const [myWords, setWords] = useState([]);

    const addWord = (word) => {
        setWords((prevWords) => [...prevWords, word]);
    };
    const wordsString = myWords.map((word) => word.english);
    console.log(myWords)

    return { addWord, wordsString };
};

export default useWordsString;