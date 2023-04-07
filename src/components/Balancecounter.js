import React, { useContext} from 'react'
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Notecontext from '../contextapi/Notecontext';
export const Balancecounter = () => {
    const Grid = styled(MuiGrid)(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& [role="separator"]': {
          margin: theme.spacing(0, 12),
        },
      }));
      
      const context=useContext(Notecontext)
      const {expense}=context
      let totalbalance=0, totalincome=0,totalexpense=0

      const total=()=>{
        expense.forEach(e => {
          if (e.price[0]==='-') {
          totalbalance-=parseFloat(e.price.slice(1))
          totalexpense+=parseFloat(e.price.slice(1))
          }
          else {
            totalbalance+=parseFloat(e.price)
            totalincome+=parseFloat(e.price)
          }
        });
     totalexpense=totalexpense.toFixed(2)
     totalincome=totalincome.toFixed(2)

        return totalbalance.toFixed(2);
      } 

      localStorage.getItem('transactions')
  return (
 <>
    <Typography mt={8.4}   sx={{
      fontWeight: 'bold',
      fontFamily: 'Hanken Grotesk , sans-serif'}} >
      Expense Tracker
    </Typography>
    <Typography sx={{
      fontFamily: 'Hanken Grotesk , sans-serif',
      fontSize:'12px'}} >
      Your Balance
    </Typography>
        <Typography variant="h5" component="h2" sx={{
          fontWeight: 'bold',
          fontFamily: 'Hanken Grotesk , sans-serif'}} >
          ${total()}
        </Typography>
  
        <Grid mt={2.2}  sx={{
        }} container>
          <Paper sx={{
            height:70,
            width:250,
            display:'flex',
            alignItems:'center',
            backgroundColor:'#eceff1'
   
          }} > 
  <Grid sx={{
      //  border:'2px solid red'
    
      }} item xs={6} textAlign='center' >
        <Typography  fontSize='17px' variant='h5' component='h2'>Income</Typography>
        <Typography fontSize='14px' fontWeight='bold' color='#29b6f6' variant="caption">${totalincome}</Typography>
      </Grid>
      <Divider variant="middle" orientation="vertical" flexItem/>

      <Grid sx={{
      //  border:'2px solid red'
    
      }} item xs={6} textAlign='center' >
        <Typography fontSize='17px' variant='h5' component='h2'>Expense</Typography>
        <Typography fontWeight='bold' fontSize='14px' color='#d32f2f' variant="caption" >${totalexpense}</Typography>
      </Grid>
   </Paper>
    </Grid>
    </>
  )
}
