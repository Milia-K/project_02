import React, { useState, useEffect } from 'react';


const ComponentCard = (props) => {
    
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    useEffect(() => {
        if (props.english !== props.english) {
            setIsClicked(false);
        }
    }, [props.english]);

    const {english, transcription, russian} = props;

    const componentStyle_question = {
        display: isClicked ? 'none' : 'contents',
        transform: isClicked ?  'rotateY(-180deg)': 'rotateY(0deg)',
        backfaceVisibility: 'hidden',
    }

    const componentStyle_answer = {
        display: isClicked ? 'contents' : 'none',
        transform: isClicked ?  'rotateY(0deg)': 'rotateY(180deg)',
        backfaceVisibility: 'hidden'
    };

    const componentStyle_card = {
        backgroundColor: isClicked ? '#6376bb' : '#c2c2c2',
        color: isClicked ? 'white' : 'black',
        transition: '0.3s',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
    };

    return (
        <div className='component-card' onClick={handleClick} style={componentStyle_card}>
            <div className='question' style={componentStyle_question}>
                <div className='card-word'><h1>{english}</h1></div>
                <div className='card-transcription'><h3> {transcription} </h3></div>
            </div>
            <div className='answer' style={componentStyle_answer}>
                <div className='card-translation'><h1> {russian}</h1></div>
            </div>
        </div>
    );
};

export default ComponentCard;


