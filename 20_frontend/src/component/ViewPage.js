import React, { useEffect, useState } from 'react'
import axios from 'axios';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import "../css/ViewPage.css"


const cardStyle = {
  width: '30%', // カードの横幅
  height: '335px', // カードの高さ
  marginBottom: '2%' 
};

export const ViewPage = () => {
  const [allItems, setAllItems] = useState([])

  useEffect(() => {
    const params = {
      user_id: 1
    }
    const get_all_data = async(params) => {
      const res = await axios.get("http://localhost:8080/all_items", {params})
      setAllItems(res.data)
    }
    get_all_data(params)
  }, [])

  return (
    <div>
      <div className='search_field'>
        <TextField id="outlined-basic" label="検索ワード" variant="outlined" />
        <FormControl >
          <InputLabel id="demo-simple-select-label">タグ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>風呂</MenuItem>
            <MenuItem value={20}>台所</MenuItem>
            <MenuItem value={30}>おしゃれ</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="demo-simple-select-label">ソート順</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>五十音順</MenuItem>
            <MenuItem value={20}>五十音順（逆）</MenuItem>
            <MenuItem value={30}>買足し期限が短い順</MenuItem>
            <MenuItem value={40}>買足し期限が長い順</MenuItem>
            <MenuItem value={50}>値段が高い順</MenuItem>
            <MenuItem value={60}>値段が安い順</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className='info'>
        <div className='info_text'>
          検索結果
        </div>
        <div className='cards'>
          {
            allItems.length === 0 ?
              <div className='nothing_notice'>
                ないです
              </div>
            :
              allItems.map((item, idx) => (
                <Card style={cardStyle} key={idx}>
                  <CardContent className='cardcontent'>
                    <div className='product_title'>
                      {item.name}
                    </div>
                    <div className='product_price'>
                      {item.price}円
                    </div>
                    <div className='product_img'>
                      <img src='noimage.png'  style={{ width: '100%', height: 'auto'}}/>
                    </div>
                  </CardContent>
                </Card>
              ))
          }           
        </div>
      </div>
    </div>
  )
}
