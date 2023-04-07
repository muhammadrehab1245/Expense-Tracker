import { Paper, Stack, Typography } from '@mui/material'
import React,{useContext} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Notecontext from '../contextapi/Notecontext';
export const Historydata = (props) => {
  const context=useContext(Notecontext)
   const {deleteexpense}=context
    const {e}=props
  return (
 
    <Stack direction='row'>
    <Paper  variant="outlined"   sx={{
        width:250,
        display:'flex',
        justifyContent:'space-between'
     }}>
        <Typography sx={{ marginLeft:1}} variant='caption'>{e.type}</Typography>
        <Typography sx={{ marginRight:1}}  variant='caption'>{e.price}</Typography>
        </Paper>
        <DeleteIcon onClick={()=>{deleteexpense(e._num)}} />
        </Stack>
        
  )
}
