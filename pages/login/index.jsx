import * as React from 'react';
import {Box, Button, FormControl, TextField} from "@mui/material";
import {useState} from "react";
import {yellow} from "@mui/material/colors";

const Index = () => {
  const [auth, setAuth] = useState({
    email: '',
    password: ''
  })
  const handlerOnChange = (e) =>{
    const {name, value} = e.target
    setAuth(prevState => ({
      ...prevState,
        [name]: value
    }))
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <FormControl sx={{
        width: '830px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
      }}>
        <TextField
          required
          sx={{
            width: '480px',
            background: '#FFFFFF',
            boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.15)',
            borderRadius: '10px;'
          }}
          id="outlined-required"
          label="email"
          name='email'
          value={auth.email}
          onChange={(e) => handlerOnChange(e)}
        />
        <TextField
          sx={{
            width: '480px',
            background: '#FFFFFF',
            boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.15)',
            borderRadius: '10px;'
          }}
          required
          id="outlined-disabled"
          label="password"
          name='password'
          value={auth.password}
          onChange={(e) => handlerOnChange(e)}
        />
        <Button sx={{
          width:'480px',
          height: '70px',
          background: '#EFE314',
          borderRadius: '48px',
          color:'#333333'
        }} type={"submit"}> Login</Button>


      </FormControl>

    </Box>
  );
};

export default Index