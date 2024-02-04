import React from 'react'
import "../css/Sidebar.css"
import { NavLink, useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const navigate = useNavigate()

  const handlePageTransition = (pageName) => {
    navigate(pageName)
  }

  return (
    <div className='sidebar'>
      <button className='buttonOutline' onClick={() => handlePageTransition("/top")} >TOPへ</button>
      <button className='buttonOutline' onClick={() => handlePageTransition("/view")}>日用品一覧</button>
      <button className='buttonOutline' onClick={() => handlePageTransition("/register")}>日用品登録</button>
    </div>
  )
}
