import React, {useState, useEffect} from 'react'
import { inject, observer } from 'mobx-react';
import wordStore from '../../Store/WordStore';
import Post from '../../Services/Post';


const NewRow = () => {

    const {appData} = wordStore;

    const [english, setNewEnglish] = useState('');
    const [transcription, setNewTranscription] = useState('');
    const [russian, setNewRussian] = useState('');

    async function addRowMobX(){
        if (appData && appData.length > 0) {
        const lastId = parseInt(appData[appData.length - 1].id);
        const newRow = {id:lastId+1, english, transcription, russian};
        let newAppData =[...appData, newRow];
        console.log(newAppData)
        wordStore.setAppData(newAppData);

        setNewEnglish(''); 
        setNewTranscription('');
        setNewRussian('');
        await Post.postAppData(newRow);

    }
}
    

    return (

        
    <div className="table_row">
        <div className='table_cell'>
            <input className='table_cell_input' value={english} onChange={({ target }) => setNewEnglish(target.value)} type="text" placeholder='Word'/>
        </div>
        <div className='table_cell'>
            <input className='table_cell_input'  value={transcription} onChange={({ target }) => setNewTranscription(target.value)} type="text" placeholder='Transcription'/>
        </div>
        <div className='table_cell'>
            <input className='table_cell_input' value={russian} onChange={({ target }) => setNewRussian(target.value)} type="text" placeholder='Translation'/>
        </div>
        <button onClick={addRowMobX}>+</button>


    </div>
)
}

export default inject('wordStore')(observer(NewRow));
