import React, {useState} from 'react'
import TableRow from './TableRow'
import './table.scss'
import ListTableHeader from './ListTableHeader'

function Table({appData}) {


return (
    <div > 
        <div className='TableHeaderList'>
            <h3>my study</h3> 
        </div>
        <div className='table'>
        <ListTableHeader/>
    {appData.map((word, index) => (
        <TableRow 
            key={index}
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