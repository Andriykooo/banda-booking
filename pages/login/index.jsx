import * as React from 'react';
import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import request from '../../src/api/auth-request'
import {useRouter} from "next/router";


const Index = () => {
  const router =useRouter();
  const [validate, setValidate] = useState(false);
  const [auth, setAuth] = useState({
    email: '',
    password: ''
  })
  const handlerOnChange = (e) => {
    const {name, value} = e.target

    setAuth({
      ...auth,
      [name]: value
    })
  }

  useEffect(()=>{
    if(auth.email && auth.password){
      request.loginUser(auth.email, auth.password).then(()=>{
        router.push('/rooms')
      })
    }

    console.log(validate)
  },[validate]);

  return (
    <Box sx={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundImage: `url(/images/bg.png)`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}
    >

      <FormControl sx={{
        borderRadius:"20px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        marginTop:'20px',
        background: '#F5F5F5',
        padding: '40px'
      }}>

        <Typography variant="h4" component="h4">
          Sign up, please
        </Typography>

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
        <Button>Forgot password?</Button>
        <Button sx={{
          width: '480px',
          height: '70px',
          background: '#EFE314',
          borderRadius: '48px',
          color: '#333333'
        }} type={"submit"}> Login</Button>


      </FormControl>

    </Box>
  );
};

export default Index