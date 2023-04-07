import { Divider, Stack, Typography } from '@mui/material'
import React, { useContext,useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Notecontext from '../contextapi/Notecontext';
import { Alerttransaction } from './Alerttransaction';
export const Addtransaction = (props) => {
 
  const [currentexpense, includeexpense] = useState({
    type:'',
    price:''
  })
  const context=useContext(Notecontext)
  const {addexpense}=context
  const {alert,showalert}=props
  
  const adding=(e)=>{
    e.preventDefault()
if (currentexpense.price==='') {
  props.showalert('Input The Number Correctly','error')
}
 else if (currentexpense.type==="") {
    props.showalert('Textfield should not be empty','error')
  }
  else{
    addexpense(currentexpense.type,currentexpense.price)
    includeexpense({type:'',price:''})
    props.showalert('Text and Price Added Successfully','success')
  }
  }

  const onchange=(e)=>{
    includeexpense({...currentexpense,[e.target.name]:e.target.value})
  }

  return (
    <>
    <Typography variant='h6' component='h2' sx={{
        fontFamily: 'Hanken Grotesk , sans-serif',
       fontSize:'13px', fontWeight:'bold'

        }} mt={3}>
        Add New Transaction
    </Typography>
     <Divider sx={{marginBottom:2.4,width:250}} />
     <Typography>Text</Typography>
     <Stack spacing={0.9} width='28ch'>
     <TextField value={currentexpense.type} name='type' onChange={onchange} size="small" id="outlined-basic"  variant="outlined" />
     <Typography fontSize='12px' >Amount</Typography>
     <Typography fontSize='12px'>(negative -expense , positive + income)</Typography>
     <TextField type='number' value={currentexpense.price} name='price' onChange={onchange} size="small" id="outlined-basic"  variant="outlined" />
    <Alerttransaction showalert={showalert} alert={alert}/>
     <Button disabled={alert!==null} onClick={adding} sx={{backgroundColor:'#7c4dff',"&:hover": {
        backgroundColor: "#7c4dff"
    }}} size="small" variant="contained">Add Transaction</Button>
     </Stack>
     </>
  )
}
