import axios from 'axios';
import React, { useState } from 'react'
import "../css/RegisterPage.css"
import { FormControl, InputLabel, Select, TextField, MenuItem, Button, Alert } from '@mui/material';
import { emptyCheck, isNumeric } from '../methods/validationCheck';
import { useSelector } from 'react-redux';

export const RegisterPage = () => {
  const [image, setImage] = useState(null);
  const [sendImage, setSendImage] = useState(null);
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [price, setPrice] = useState("");
  const [spanNum, setSpanNum] = useState("");
  const [spanUnit, setSpanUnit] = useState("");
  const [resRslt, setResRslt] = useState(0);
  const userId = useSelector(state => state.authorize.user_id)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSendImage(file)

      const reader = new FileReader(); // ファイルを読み込むためのFileReaderオブジェクトを作成
      reader.onload = () => {
        // 読み込んだ画像のURLをstateにセット
        setImage(reader.result);
      };
      reader.readAsDataURL(file); // 画像をDataURLとして読み込む
    }
  };

  const handleFieldChange = (e, setFunction) => {
    setFunction(e.target.value)
  }

  const handleRegister = async() => {
    if(emptyCheck(name) === -1){
      setResRslt(-1)
    }else if(emptyCheck(tag) === -1){
      setResRslt(-2)
    }else if(emptyCheck(price) === -1){
      setResRslt(-3)
    }else if(isNumeric(price) === -1){
      setResRslt(-4)
    }else if(emptyCheck(spanNum) === -1){
      setResRslt(-5)
    }else if(isNumeric(spanNum) === -1){
      setResRslt(-6)
    }else if(emptyCheck(spanUnit) === -1){
      setResRslt(-7)
    }else{
      // const dataToSend = {
      //   user_id : userId,
      //   name: name,
      //   img_file_name: "sample_img.png",
      //   span_num: spanNum,
      //   span_unit: spanUnit,
      //   price: price,
      //   tag: tag,
      //   image: sendImage
      // }

      const formData = new FormData();
      formData.append('user_id', userId);
      formData.append('name', name);
      formData.append('img_file_name', 'sample_img.png');
      formData.append('span_num', spanNum);
      formData.append('span_unit', spanUnit);
      formData.append('price', price);
      formData.append('tag', tag);
      formData.append('image', sendImage);

      await axios.post("http://localhost:8080/register_item", formData, {
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data'
        },
      })
      setName("")
      setTag("")
      setPrice("")
      setSpanNum("")
      setSpanUnit("")
      setResRslt(1)
    }
  }


  return (
    <>
    {
      resRslt === -1 ?
        <Alert severity='error' onClose={() => {setResRslt(0)}} width='100%' >
          日用品名が未入力です。
        </Alert>
      : (resRslt === -2 ?
        <Alert severity='error' onClose={() => {setResRslt(0)}} width='100%' >
          タグが未入力です。
        </Alert>
      : (resRslt === -3 ?
        <Alert severity='error' onClose={() => {setResRslt(0)}} width='100%' >
          価格が未入力です。
        </Alert>
      : (resRslt === -4 ?
        <Alert severity='error' onClose={() => {setResRslt(0)}} width='100%' >
          価格は数値で入力してください。
        </Alert> 
      : (resRslt === -5 ?
        <Alert severity='error' onClose={() => {setResRslt(0)}} width='100%' >
          買足し期間が未入力です。
        </Alert>
      : (resRslt === -6 ?
        <Alert severity='error' onClose={() => {setResRslt(0)}} width='100%' >
          買足し期間は数値で入力してください。
        </Alert>
      : (resRslt === -7 ?
        <Alert severity='error' onClose={() => {setResRslt(0)}} width='100%' >
        買足し期間の単位が未入力です。
        </Alert>
      : (resRslt === 1 ? 
        <Alert severity='success' onClose={() => {setResRslt(0)}} width='100%' >
        日用品登録に成功しました
        </Alert>
      :<></>)))))))
    }
      <div className='upload_form'>
        <div className='upload_img'>
          {image ?
            <>
              <div>
                <img src={image} alt="選択した画像" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <label htmlFor="fileInput" className="image_label_select">
                <div className='label_container'>
                  画像ファイルを再選択
                </div>
              </label>
              <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            </>
            :
            <>
              <label htmlFor="fileInput" className="image_label">
                <div className='label_container'>
                  画像ファイルを選択
                </div>
              </label>
              <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            </>
          }
        </div>
        <div className='item_form'>
          <div className='item_name'>
            <TextField 
              id="outlined-basic" 
              label="日用品名" 
              variant="outlined" 
              style={{ width: '50%'}}
              value={name}
              onChange={(e) => handleFieldChange(e, setName)}
            />
          </div>

          <div className='item_tag'>
            <TextField 
              id="outlined-basic" 
              label="タグ" 
              variant="outlined" 
              style={{ width: '50%'}} 
              value={tag}
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
              value={price}
            />
          </div>

          <div className='item_span'>
            <TextField 
              id="outlined-basic" 
              label="買足し期間" 
              variant="outlined" 
              style={{ width: '35%'}} 
              value={spanNum}
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
    </>
  )
}
