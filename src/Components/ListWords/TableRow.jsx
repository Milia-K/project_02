import React, {useState} from 'react'
import TableCell from './TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCheck} from '@fortawesome/free-solid-svg-icons'

function TableRow(props) {


    const [isInputUnblocked, setIsInputUnblocked] = useState(false);

    const handleUnblockInput =() => {
        setIsInputUnblocked(true)
    }
    
    const handleSaveChange =(item) => {
        if (item === ''){
            setIsInputUnblocked(true)
        } else
        {setIsInputUnblocked(false)}
    }


const {english, transcription, russian} = props;

    return (
    <div className="table_row">
        <TableCell item={english} isInputUnblocked ={isInputUnblocked} />
        <TableCell item={transcription} isInputUnblocked ={isInputUnblocked}/>
        <TableCell item={russian} isInputUnblocked ={isInputUnblocked}/> 

        <button onClick={handleUnblockInput} > <FontAwesomeIcon icon={faPencil} /> </button>
        <button onClick={handleSaveChange}> <FontAwesomeIcon icon={faCheck} /> </button>
    </div>
    
    )
}

export default TableRow;


