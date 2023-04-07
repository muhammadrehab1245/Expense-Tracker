import { Divider, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Notecontext from '../contextapi/Notecontext'
import { Historydata } from './Historydata'

export const History = () => {
   const context=useContext(Notecontext)
   const {expense}=context

  return (
    <> 
    <Typography variant='h6' component='h2' sx={{
        fontFamily: 'Hanken Grotesk , sans-serif',
       fontSize:'13px', fontWeight:'bold'

        }} mt={3}>
        History
    </Typography>
     <Divider sx={{width:250}} />
     <Stack spacing={1.1} mt={1.3}>  

    { expense.map((e)=>{
   return <Historydata e={e} key={e._num}/>
   }) }

     
     {/*<Paper  variant="outlined"  sx={{
    
        width:250,
        display:'flex',
        justifyContent:'space-between'
     }}>
        <Typography sx={{ marginLeft:1}} variant='caption'>Payment</Typography>
        <Typography sx={{ marginRight:1}}  variant='caption'>-50$</Typography>
   </Paper> */}
     </Stack>
     </>
  )
}
