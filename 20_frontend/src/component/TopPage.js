import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../css/TopPage.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSelector } from 'react-redux';

export const TopPage = () => {
  const [recentItems, setRecentItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [priceDiff, setPriceDiff] = useState(0)
  const userId = useSelector(state => state.authorize.user_id)

  const cardStyle = {
    width: '30%', // カードの横幅
    height: '335px', // カードの高さ
    marginBottom: '2%' 
  };

  useEffect(() => {
    const params = {
      user_id: userId
    }
    const get_recent_data = async(params) => {
      const res = await axios.get("http://localhost:8080/recent_items", {params})
      setRecentItems(res.data)
    }
    const get_statistic_data = async(params) => {
      const res = await axios.get("http://localhost:8080/total", {params})
      setTotalPrice(res.data.this_month)
      setPriceDiff(res.data.last_month - res.data.this_month)
    }

    get_recent_data(params)
    get_statistic_data(params)
  }, [])

  return (
    <div className='toppage'>
      <div className='statistics_this_month'>
        <div className='statistics_sent'>
          今月は日用品に 
        </div>
        <div className='price'>
            {totalPrice} 
        </div>
        <div className='statistics_sent'>
          円使う予定です
        </div>
      </div>

      <div className='statistics_compare'>
        <div className='statistics_sent'>
          (前月より 
        </div>
        {
        priceDiff >= 0 ? 
          <>
            <div className='price_blue'>
              {priceDiff} 
            </div>
            <div className='statistics_sent'>
              円 DOWN)
            </div>
          </>
        :
          <>
            <div className='price_red'>
              {-priceDiff} 
            </div>
            <div className='statistics_sent'>
              円 UP)
            </div>
          </>
        }
      </div>

      <div className='info'>
        <div className='info_text'>
          １週間以内に買足しが必要な日用品
        </div>
        <div className='cards'>
        {
            recentItems.length === 0 ?
              <div className='nothing_notice'>
                1週間以内に買足しが必要な日用品はありません
              </div>
            :
              recentItems.map((item, idx) => (
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
