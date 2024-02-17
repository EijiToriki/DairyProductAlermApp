import React, {useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { login } from '../redux/authorizeSlice';
import { Alert } from '@mui/material';


const defaultTheme = createTheme();

export function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [alertFlag, setAlertFlag] = useState(false)

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = {
      login_id: data.get('id'),
      password: data.get('password'),
    };
    try{
      const res = await axios.get("http://localhost:8080/auth_user", {params})
      if(res.data !== -1){
        const action = login(res.data)
        dispatch(action)
        navigate("/top")
      }else{
        setAlertFlag(true)
      }
    }catch(error){
      console.log(error)
    }
  };

  return (
    <>
      {
        alertFlag ? 
          <Alert severity="warning" onClose={() => {setAlertFlag(false)}} width='80%'>
            IDもしくはパスワードが誤っています。
          </Alert>
        :
          <></>
      }
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ログイン
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="id"
                label="ログインID"
                name="id"
                autoComplete="ログインID"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ログイン
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}