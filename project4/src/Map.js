import React, { useEffect, useState } from 'react'
import {Paragraphs} from './Text'
export default function Map() {
  const [count,setCount] = useState(0)
  const [text,setText] = useState()

useEffect(() => {if(count < 0){
setCount(1)
}
if(count > Paragraphs.length){
setCount(Paragraphs.length)
}

},[count]) 

// slice == filter

const ok = () => {
let newArray =  Paragraphs.slice(0,count)
setText(newArray.map(c=>{
  const {id,object} = c
  return <div key={id} className='m-3 p-3 bg-dark text-light text-center'>
  <p>{object}</p>
  </div>
}))
}


return (<>
    <div className='container bg-success text-light text-center'>
      <div>
  <h1>Our Paragraphs</h1>
  <hr />
<div className='d-flex align-items-center justify-content-center'>
  <button className='btn bg-info p-3 m-3' onClick={()=>ok()}>Create</button>
  <input  onChange={(e)=>setCount(e.target.value)}  className='bg-dark rounded text-light text-center'  type='number' style={{
    width:'50px',
    height:'55px'
  }}/>
  </div>
</div></div>
    <div >
  {text}
  </div>
 </>
  )


}