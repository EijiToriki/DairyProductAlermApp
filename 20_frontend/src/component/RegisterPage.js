import axios from 'axios';
import React, { useState } from 'react'
import "../css/RegisterPage.css"
import { FormControl, InputLabel, Select, TextField, MenuItem, Button } from '@mui/material';

export const RegisterPage = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [price, setPrice] = useState(0);
  const [spanNum, setSpanNum] = useState(0);
  const [spanUnit, setSpanUnit] = useState("");
  const [resRslt, setResRslt] = useState(0);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleFieldChange = (e, setFunction) => {
    setFunction(e.target.value)
  }

  const handleRegister = async() => {
    const dataToSend = {
      user_id : 1,
      name: name,
      img_file_name: "sample_img.png",
      span_num: spanNum,
      span_unit: spanUnit,
      price: price,
      tag: tag
    }

    const res = await axios.post("http://localhost:8080/register_item", dataToSend, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setResRslt(res.data)
  }


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
            onChange={(e) => handleFieldChange(e, setName)}
          />
        </div>

        <div className='item_tag'>
          <TextField 
            id="outlined-basic" 
            label="タグ" 
            variant="outlined" 
            style={{ width: '50%'}} 
            onChange={(e) => handleFieldChange(e, setTag)}
          />
        </div>

        <div className='item_price'>
          <TextField 
            id="outlined-basic" 
            label="価格" 
            variant="outlined" 
            style={{ width: '50%'}} 
            onChange={(e) => handleFieldChange(e, setPrice)}
          />
        </div>

        <div className='item_span'>
          <TextField 
            id="outlined-basic" 
            label="買足し期間" 
            variant="outlined" 
            style={{ width: '35%'}} 
            onChange={(e) => handleFieldChange(e, setSpanNum)}
          />
          <FormControl style={{ width: '15%'}}>
            <InputLabel id="unit">単位</InputLabel>
            <Select
              labelId="unit"
              id="unit"
              label="タグ"
              value={spanUnit}
              onChange={(e) => handleFieldChange(e, setSpanUnit)}
            >
              <MenuItem value={'日'}>日</MenuItem>
              <MenuItem value={'月'}>月</MenuItem>
              <MenuItem value={'年'}>年</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='button_position'>
          <Button style={{ width: '50%' }} variant="outlined" color="inherit" onClick={handleRegister}>登録</Button>
        </div>
      </div>
    </div>
  )
}
