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
  height: '400px', // カードの高さ
  marginBottom: '2%' 
};

export const ViewPage = () => {
  const [allItems, setAllItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [word, setWord] = useState("")
  const [tag, setTag] = useState("")
  const [sortMode, setSortMode] = useState("")

  useEffect(() => {
    const params = {
      user_id: 1
    }
    const get_all_data = async(params) => {
      const res = await axios.get("http://localhost:8080/all_items", {params})
      setAllItems(res.data)
      setFilteredItems(res.data)
    }
    get_all_data(params)
  }, [])

  const handleChange = (e) => {
    const search_word = e.target.value
    setWord(search_word) 
    setTag("")
    if(search_word === ""){
      setFilteredItems(allItems)
    }else{
      setFilteredItems(allItems.filter(item => {
        return item.name.includes(search_word);
      }))
    }
  }

  const handleTagSelect = (e) => {
    const search_tag = e.target.value
    setWord("")
    setTag(search_tag)
    setFilteredItems(allItems.filter(item => {
      return item.tag === search_tag;
    }))
  }

  const handleSort = (e) => {
    const sort_mode = e.target.value
    setSortMode(sort_mode)

    if(sort_mode === "五十音順"){
      setFilteredItems(
        filteredItems.sort((a, b) => {
          return a.name.localeCompare(b.name, 'ja');
        })
      )
    }else if(sort_mode === "五十音順（逆）"){
      setFilteredItems(
        filteredItems.sort((a, b) => {
          return b.name.localeCompare(a.name, 'ja');
        })
      )
    }else if(sort_mode === "買足し期限が短い順"){
    }else if(sort_mode === "買足し期限が長い順"){
    }else if(sort_mode === "値段が高い順"){
      setFilteredItems(
        filteredItems.sort((a, b) => {
          return parseInt(b.price) - parseInt(a.price);
        })
      )
    }else if(sort_mode === "値段が安い順"){
      setFilteredItems(
        filteredItems.sort((a, b) => {
          return parseInt(a.price) - parseInt(b.price);
        })
      )
    }
  }

  const handleDelete = async(item_id, user_id) => {
    await axios.delete(
      `http://localhost:8080/delete_item?item_id=${item_id}&user_id=${user_id}`
    )
    setAllItems(
      allItems.filter(item => {
        return item.id !== item_id || item.user_id !== user_id;
      })
    )

    setFilteredItems(
      filteredItems.filter(item => {
        return item.id !== item_id || item.user_id !== user_id;
      })
    )



  }



  return (
    <div>
      <div className='search_field'>
        <TextField 
          id="outlined-basic" 
          label="検索ワード" 
          variant="outlined" 
          onChange={handleChange}
          style={{ width: '35%'}} 
          value={word}
        />
        <FormControl style={{ width: '30%'}}>
          <InputLabel id="tag">タグ</InputLabel>
          <Select
            value={tag}
            labelId="tag"
            id="tag"
            label="タグ"
            onChange={handleTagSelect}
          >
            <MenuItem value={'風呂'}>風呂</MenuItem>
            <MenuItem value={'台所'}>台所</MenuItem>
            <MenuItem value={'おしゃれ'}>おしゃれ</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: '30%'}}>
          <InputLabel id="sort">ソート順</InputLabel>
          <Select
            value={sortMode}
            labelId="sort"
            id="sort"
            label="ソート順"
            onChange={handleSort}
          >
            <MenuItem value={"五十音順"}>五十音順</MenuItem>
            <MenuItem value={"五十音順（逆）"}>五十音順（逆）</MenuItem>
            <MenuItem value={"買足し期限が短い順"}>買足し期限が短い順</MenuItem>
            <MenuItem value={"買足し期限が長い順"}>買足し期限が長い順</MenuItem>
            <MenuItem value={"値段が高い順"}>値段が高い順</MenuItem>
            <MenuItem value={"値段が安い順"}>値段が安い順</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className='info'>
        <div className='info_text'>
          検索結果
        </div>
        <div className='cards'>
          {
            filteredItems.length === 0 ?
              <div className='nothing_notice'>
                ないです
              </div>
            :
              filteredItems.map((item, idx) => (
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
                    <button className='buttonOutline' onClick={() => handleDelete(item.id, item.user_id)}>削除</button>
                  </CardContent>
                </Card>
              ))
          }           
        </div>
      </div>
    </div>
  )
}
