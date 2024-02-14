import React, { useState } from 'react'
import "../css/Sidebar.css"
import { useNavigate } from 'react-router-dom'

export const Sidebar = ({noLogin}) => {
  const navigate = useNavigate()
  const [btnNum, setBtnNum] = useState(0)

  const loginState = null // Todo : Reducerで状態取得する

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
    <div className='sidebar'>
      {
        btnNum === 1 ?
        <button className='buttonOutlineRed' disabled={true}>TOPへ</button>
        :
        <button className='buttonOutline' onClick={() => handlePageTransition("/top", 1)} >TOPへ</button>
      }

      {
        btnNum === 2 ?
        <button className='buttonOutlineRed' disabled={true}>日用品一覧</button>
        :
        <button className='buttonOutline' onClick={() => handlePageTransition("/view", 2)}>日用品一覧</button>
      }

      {
        btnNum === 3 ?
        <button className='buttonOutlineRed' disabled={true}>日用品登録</button>
        :
        <button className='buttonOutline' onClick={() => handlePageTransition("/register", 3)}>日用品登録</button>
      }
    </div>
  )
}
