import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import {Box, Container, Typography, useMediaQuery} from "@mui/material"
import tops from "../../assets/images/productpage/1.png"
import blacks from "../../assets/images/productpage/4.png"
import tshirts from "../../assets/images/productpage/3.png"
import colors from "../../assets/images/productpage/2.png"


export const Slider = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <>
    <Box bgcolor="transparent" mx={isSmallScreen ? 2 : 10} 
    
       display="flex" sx={{
      borderRadius:"20px",overflow:"hidden", 
      height: isSmallScreen ? '200px': '350px',
      boxShadow:" rgba(0, 0, 0, 0.25) 0px 10px 20px -12px",
      marginBottom: '100px',
    }}>
    
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img src={tops} style={{width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={blacks} style={{width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tshirts} style={{width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={colors} style={{width:"100%"}} />
      </SwiperSlide>
    </Swiper>
    </Box>  

   

    </>
  )
}
