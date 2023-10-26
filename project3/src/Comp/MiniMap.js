import { useState } from "react"
export default function MiniMap() {
    const [state,setState] = useState('Good opening sentences establish the paragraph')
    const [appear,setAppear] = useState('sentence is the most important sentence of any paragraph. Busy readers focus on opening sentences and sometimes skip over subsequent sentences. ')
    const [mark,setMark] = useState(false)
  return (
    <div className="d-flex m-4 flex-column">
 <h4>{state}</h4>
 <div>{mark && appear}</div><button onClick={()=>setMark(!mark)} className="btn bg-warning mx-2">{mark?'Disappear':'Appear'}</button>
    </div>
  )
}

