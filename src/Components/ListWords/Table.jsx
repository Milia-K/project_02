import TableRow from './TableRow'
import './table.scss'
import ListTableHeader from './ListTableHeader'
import { inject, observer} from 'mobx-react';
import NewRow from './NewRow';
import wordStore from '../../Store/WordStore';



const Table = () => {

const {appData} = wordStore;

return (
    <div > 
        <div className='TableHeaderList'>
            <h3>my study</h3> 
            <NewRow />
        </div>

        <div className='table'>
        <ListTableHeader/>
    {appData && appData.map((word, id) => (
        <TableRow 
            key={id}
            id={word.id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
        ></TableRow>
        
    ))}
    </div>
    </div>
)
}

export default inject('wordStore')(observer(Table));