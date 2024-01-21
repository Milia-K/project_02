import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCheck, faTrash} from '@fortawesome/free-solid-svg-icons'
import { MyContext } from '../../Context/MyContext';
import { useContext } from 'react'


function TableRow(props) {

    const {id} = props;
    const {appData, setAppData} = useContext(MyContext);

    const [english, setEnglish] = useState(props.english);
    const [transcription, setTranscription] = useState(props.transcription);
    const [russian, setRussian] = useState(props.russian);

    const [isInputUnblocked, setIsInputUnblocked] = useState(false);

    const handleUnblockInput = () => {
        setIsInputUnblocked(true);
    };
    
    const handleSaveChange = () => {
        if (english === '' || transcription === '' || russian === '') {
            setIsInputUnblocked(true);
        } else {
            setIsInputUnblocked(false);
        }
    };


    const handleDeleteChange = (id) => { // Поменяли имя параметра на deletedId
        let newAppData = appData.filter((item) => item.id !== id); // Используем новое имя параметра
        setAppData(newAppData);
        console.log(newAppData);
    };
    

    return (
        
        <div className='table_row' key={id}>
            <div className='table_cell'>
                <input className='table_cell_input'
                disabled={!isInputUnblocked} 
                value={english} 
                onChange={({ target }) => setEnglish(target.value)}
                type="text"/>
            </div>
            <div className='table_cell'>
            <input className='table_cell_input'
                disabled={!isInputUnblocked} 
                value={transcription} 
                onChange={({ target }) => setTranscription(target.value)}
                type="text"/>
            </div>
            <div className='table_cell'>
            <input className='table_cell_input'
                disabled={!isInputUnblocked} 
                value={russian} 
                onChange={({ target }) => setRussian(target.value)}
                type="text"/>
            </div>
            
            <button onClick={handleUnblockInput} > <FontAwesomeIcon icon={faPencil} /> </button>
            <button onClick={handleSaveChange}> <FontAwesomeIcon icon={faCheck} /> </button>
            <button  onClick={() => handleDeleteChange(id)}> <FontAwesomeIcon icon={faTrash} /> </button>
            </div>
    )
}

export default TableRow;
