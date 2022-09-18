import * as React from 'react';
import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {usersAPI} from "../../src/api/auth-request";


const Index = () => {
  const router = useRouter();
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

  const send = (e) => {
    e.preventDefault();
    if (!auth.email || !auth.password) {
      setValidate(true);
      return
    }

    setValidate(false);


  }

  console.log(validate)
  useEffect(() => {
    if (!validate && auth.email && auth.password) {
      usersAPI.loginUser(auth.email, auth.password)
        .then(() => {
          router.push('/rooms')
        })
        .catch((err) => console.log(err))
    }

  }, [validate]);

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
      height: '100vh',
      width:'100%'
    }}
    >

      <Box
        component="form"
        sx={{
          borderRadius: "20px",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '20px',
          background: '#F5F5F5',
          padding: '40px'
        }} onSubmit={send} noVailde>

        <Typography variant="h4" component="h4">
          Sign up, please
        </Typography>

        <TextField
          required
          error={validate}
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
          error={validate}
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
          fontWeight: '500',
          fontSize: '20px',
          color: '#333333'
        }} type={"submit"}> Login</Button>


      </Box>

    </Box>
  );
};

export default Index