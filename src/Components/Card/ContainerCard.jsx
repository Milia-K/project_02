import React from 'react'
import Card from './Card'
import './Card.scss'

function ContainerCard({appData}) {

  return (
    <div  className='container-card'>
        <Card appData={appData}></Card>
    </div>
  )
}

export default ContainerCard