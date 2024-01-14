import React from 'react'
import Table from '../../Components/ListWords/Table'


function List({appData}) {
  return (
    <div>
      <Table appData={appData}/>
    </div>
  )
}

export default List