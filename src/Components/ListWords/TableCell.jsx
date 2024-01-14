import React, {useState} from 'react'

function TableCell({item,isInputUnblocked}) {

const [state, setState] = useState(item)

return (
    <div className='table_cell'>
        <input
        className='table_cell_input'
        disabled={!isInputUnblocked} 
        value={state}
        onChange={({ target }) => setState(target.value)}
        type="text" />
    </div>
)
}

export default TableCell
