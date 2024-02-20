import React, { useState } from 'react'
import "../css/Sidebar.css"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'

export const Sidebar = ({noLogin}) => {
  const navigate = useNavigate()
  const [btnNum, setBtnNum] = useState(0)

  const loginState = useSelector(state => state.authorize.user_id)

  const handlePageTransition = (pageName, btnNum) => {
    if(loginState === null){
      navigate("/")
      noLogin()
    }else{
      setBtnNum(btnNum)
      navigate(pageName)
    }
  }

  return (
    <div className='sidebarParent'>
      <div className='sidebarBtn'>
      {
        btnNum === 1 ?
        <Button 
          style={{ width: '80%' }} variant="outlined" 
          color="inherit" disabled={true}>
            TOPへ
        </Button>
        :
        <Button 
          style={{ width: '80%' }}  variant="outlined" color="inherit"  
          onClick={() => handlePageTransition("/top", 1)} >
            TOPへ
        </Button>
      }
      </div>

      <div className='sidebarBtn'>
      {
        btnNum === 2 ?
        <Button 
          style={{ width: '80%' }} variant="outlined" 
          color="inherit" disabled={true}>
          日用品一覧
        </Button>
        :
        <Button 
          style={{ width: '80%' }} variant="outlined" color="inherit"
          onClick={() => handlePageTransition("/view", 2)}>
            日用品一覧
          </Button>
      }
      </div>

      <div className='sidebarBtn'>
      {
        btnNum === 3 ?
          <Button 
          style={{ width: '80%' }} variant="outlined" 
          color="inherit" disabled={true}>
          日用品登録
        </Button>
        :
        <Button 
          style={{ width: '80%' }} variant="outlined" color="inherit"
          onClick={() => handlePageTransition("/register", 3)}>
            日用品登録
        </Button>
      }
      </div>
    </div>
  )
}
