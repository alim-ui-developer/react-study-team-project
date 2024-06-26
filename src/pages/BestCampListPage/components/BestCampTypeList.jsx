import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import './BestCampTypeList.style.css'

const BestCampTypeList = ({list}) => {
  return (
    <section className='bestCampTypeList'>
    {list && list.map((item) => 
      <Box 
        key={item.contentId}
        className='bestCampTypeListItem' 
        sx={{
          backgroundImage:{
            xs: `url(${item.firstImageUrl})`,
            sm: 'none'
          }
        }}
      >
        <article className='textBox'>
          <div>
            <h3>{item.facltNm}</h3>
            <p className='lineIntro'>{item.lineIntro}</p>
          </div>
          <p className='btn_more'>
            <Link to={`/campings/${item.contentId}?keyword=${item.facltNm}&lat=${item.mapY}&lon=${item.mapX}`}>자세히 보기</Link>
          </p>
        </article>
        <p className='imgBox'><img src={item.firstImageUrl} alt={`${item.facltNm} 이미지`} /></p>
      </Box>
    )}
    </section>
  )
}

export default BestCampTypeList