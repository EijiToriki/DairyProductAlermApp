import React from 'react'
import "../css/TopPage.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const TopPage = () => {
  const total_price = 5500
  const price_diff = 700
  const product_name = "スポンジ"
  const product_price = 300

  const cardStyle = {
    width: '30%', // カードの横幅
    height: '335px', // カードの高さ
    marginBottom: '2%' 
  };

  return (
    <div className='toppage'>
      <div className='statistics_this_month'>
        <div className='statistics_sent'>
          今月は日用品に 
        </div>
        <div className='price'>
            {total_price} 
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
        price_diff > 0 ? 
          <>
            <div className='price_blue'>
              {price_diff} 
            </div>
            <div className='statistics_sent'>
              円 DOWN)
            </div>
          </>
        :
          <>
            <div className='price_red'>
              {-price_diff} 
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
          <Card style={cardStyle}>
            <CardContent className='cardcontent'>
              <div className='product_title'>
                {product_name}
              </div>
              <div className='product_price'>
                {product_price}円
              </div>
              <div className='product_img'>
                <img src='noimage.png'  style={{ width: '100%', height: 'auto'}}/>
              </div>
            </CardContent>
          </Card>
          <Card style={cardStyle}>
            <CardContent>
              {/* カードのコンテンツ */}
            </CardContent>
          </Card>
          <Card style={cardStyle}>
            <CardContent>
              {/* カードのコンテンツ */}
            </CardContent>
          </Card>
          
        </div>
      </div>


      
    </div>
  )
}
