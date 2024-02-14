import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Header } from './component/Header';
import { Sidebar } from './component/Sidebar';
import { TopPage } from './component/TopPage';
import { ViewPage } from './component/ViewPage';
import { RegisterPage } from './component/RegisterPage';
import { Login } from './component/Login';
import { useState } from 'react';
import { Alert } from '@mui/material';

function App() {
  const [loginFlg, setLoginFlg] = useState(true)
  const loginState = null // Todo : Reducerで状態取得する

  const noLogin = () => {
    setLoginFlg(false)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className='header'>
          <Header />
        </div>
        <div className='main'>
          <div className='sidebar'>
            <Sidebar noLogin={noLogin}/>
          </div>
          <div className='content'>
            {
              loginFlg ?
              <></>
              :
              <Alert severity='error' onClose={() => {setLoginFlg(true)}} width='100%' >
                ログインしてください
              </Alert>
            }
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/top" element={<TopPage />} />
              <Route exact path="/view" element={<ViewPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
