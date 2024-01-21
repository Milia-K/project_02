import React, {useState, useContext} from 'react'
import { MyContext } from '../../Context/MyContext';
import Post from '../../Services/Post';


function NewRow() {

    const {appData, setAppData} = useContext(MyContext);

    const [english, setNewEnglish] = useState('');
    const [transcription, setNewTranscription] = useState('');
    const [russian, setNewRussian] = useState('');


    async function addRowContext(){
        const lastId = parseInt(appData[appData.length - 1].id);
        const newRow = {id:lastId+1, english, transcription, russian}
        setAppData(prevAppData => [...prevAppData, newRow]);

        setNewEnglish(''); 
        setNewTranscription('');
        setNewRussian('');
        
        await Post.postAppData(newRow)
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
        <button onClick={addRowContext}>+</button>


    </div>
)
}

export default NewRow