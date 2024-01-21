import React, {useState} from 'react'
import TableRow from './TableRow'
import './table.scss'
import ListTableHeader from './ListTableHeader'
import { MyContext } from '../../Context/MyContext';
import { useContext } from 'react'
import NewRow from './NewRow';


function Table() {

const {appData, setAppData} = useContext(MyContext);


return (
    <div > 
        <div className='TableHeaderList'>
            <h3>my study</h3> 
            <NewRow />
        </div>

        <div className='table'>
        <ListTableHeader/>
    {appData.map((word, id) => (
        <TableRow 
            key={id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
        ></TableRow>
        
    ))}
    </div>
    </div>
  )
}

export default Table;