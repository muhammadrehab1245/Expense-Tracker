import './App.css';
import { useState,useEffect } from 'react'
import { Container } from '@mui/system';
import { Balancecounter } from './components/Balancecounter';
import { History } from './components/History';
import { Addtransaction } from './components/Addtransaction';
import { createTheme, ThemeProvider } from '@mui/material';
import { Notestate } from './contextapi/Notestate';
function App() {
  const theme=createTheme({
    typography:{
          fontFamily: ['Hanken Grotesk , sans-serif',].join(','),
      },
      palette: {
        background: {
          main: "black",
        }
      },
  })
  const [alert, setalert] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setalert(null)
    }, 4000);
  }, [])

  const showalert = (message, color) => {
    setalert({
      msg: message,
      color: color,
    });
  };
  return (
    <Notestate showalert={showalert}>
    <ThemeProvider theme={theme}>
      <Container  sx={{
        width:420,
      }}>
   <Balancecounter/> 
  <History/>
  <Addtransaction alert={alert} showalert={showalert}/>
        </Container>  
        </ThemeProvider>
        </Notestate>
  );
}

export default App;
