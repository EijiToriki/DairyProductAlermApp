import React, { useState } from 'react'
import "../css/RegisterPage.css"
import { FormControl, InputLabel, Select, TextField, MenuItem } from '@mui/material';

export const RegisterPage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };


  return (
    <div className='upload_form'>
      <div className='upload_img'>
        <label htmlFor="fileInput" className="image_label">
          <div className='label_container'>
            画像ファイルを選択
          </div>
        </label>
        <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
      </div>
      <div className='item_form'>
        <div className='item_name'>
          <TextField 
            id="outlined-basic" 
            label="日用品名" 
            variant="outlined" 
            style={{ width: '50%'}} 
          />
        </div>

        <div className='item_tag'>
          <TextField 
            id="outlined-basic" 
            label="タグ" 
            variant="outlined" 
            style={{ width: '50%'}} 
          />
        </div>

        <div className='item_price'>
          <TextField 
            id="outlined-basic" 
            label="価格" 
            variant="outlined" 
            style={{ width: '50%'}} 
          />
        </div>

        <div className='item_span'>
          <TextField 
            id="outlined-basic" 
            label="買足し期間" 
            variant="outlined" 
            style={{ width: '35%'}} 
          />
          <FormControl style={{ width: '15%'}}>
            <InputLabel id="unit">単位</InputLabel>
            <Select
              labelId="unit"
              id="unit"
              label="タグ"
            >
              <MenuItem value={'日'}>日</MenuItem>
              <MenuItem value={'月'}>月</MenuItem>
              <MenuItem value={'年'}>年</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='button_position'>
          <button className='buttonOutline'>登録</button>
        </div>


        
      
      </div>
    </div>
  )
}
