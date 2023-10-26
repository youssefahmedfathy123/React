import React from 'react'
import {Text} from './Comp/Text'
import MiniMap from './Comp/MiniMap'

export default function App() {
  return (
    <div className='container bg-info p-3 rounded'>
  {Text.map(x => <MiniMap  key ={x.id} />)}
    </div>
  )
}

