import React from 'react'
import Alert from '@mui/material/Alert';
export const Alerttransaction = (props) => {
  return (
     props.alert &&
    <Alert severity={props.alert.color}  variant="filled">{props.alert.msg}</Alert>
  )
}
