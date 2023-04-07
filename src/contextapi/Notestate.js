import { useState,useEffect } from 'react'
import Notecontext from './Notecontext'

export const Notestate = (props) => {

 /* let expensedata = [
    {
      _num:1,
      type:'book',
      price:10.3
    },
    {
      _num:2,
      type:'ice-cream',
      price:1
    },
    {
      _num:3,
      type:'ticket',
      price:-4.3
    }
  ]*/

  const expensestorage = JSON.parse(localStorage.getItem('transactions'));

  let expensedata = localStorage.getItem('transactions') !== null ? expensestorage : [];

  const [expense,expenseupdate]= useState(expensedata)

  const addexpense=(type,price)=>{
    const newexpense={
      _num:parseInt((Math.random() * 1000000000)),
      'type':type,
     'price':price,
    }
    expenseupdate(expense.concat(newexpense))

  }

  useEffect(() => {
    localStorage.setItem('transactions',JSON.stringify(expense))
    //localStorage.removeItem("transactions");
  }, [expense])

  const deleteexpense=(id)=>{
    const delexpense = expense.filter((exp) => {
      return exp._num !== id;
    }); 
    expenseupdate(delexpense)
    props.showalert('Deleted Data Successfully','success')
    localStorage.setItem('transactions',JSON.stringify(expense))
  }
  return (
    <Notecontext.Provider value={{expense,addexpense,deleteexpense}}>
    {props.children}
  </Notecontext.Provider>
  )
}
