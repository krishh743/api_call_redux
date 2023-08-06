import {TextField} from '@mui/material'
import React, {useState} from 'react'

function InputField() {
const [values,setValues]=useState([])

const handleChange = (e)=>{
setValues(e.target.value)
}
console.log(values,"values")
  return (
    <div>
      <TextField value={values} onChange={handleChange}/>
    </div>
  )
}

export default InputField
