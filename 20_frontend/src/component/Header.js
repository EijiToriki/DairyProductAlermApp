import React from 'react'
import '../css/Header.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authorizeSlice'

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginState = useSelector(state => state.authorize.user_id)

  console.log(loginState)

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <div className='header'>
      <div className='headerTitle'>
        カイタシ君
        <div className='headerSubTitle'>
          ~ 日用品の買い忘れゼロに ~
        </div>
      </div>
      {loginState !== null?
      <div className='logoutButton'>
        <Button variant="outlined" color='inherit' onClick={handleLogout}>ログアウト</Button>
      </div>
      :
      <></>
      }

    </div>
  )
}
