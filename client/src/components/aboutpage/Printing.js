import { Box, Grid, useMediaQuery, Typography } from '@mui/material'
import React from 'react'
import { Card } from './Card';
import dtf from '../../assets/images/printing/dt.webp'; 
import emboss from '../../assets/images/printing/emboss.jpeg'; 
import hd from '../../assets/images/printing/hd.jpg'; 
import puff from '../../assets/images/printing/puff.jpg'; 
import screen from '../../assets/images/printing/screen.jpg'; 
import embroidry from '../../assets/images/printing/embroidry.jpg'; 




export const Printing = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
    <Box height={600} >
      <Grid container height={600} spacing ={2} sx={{
         display:"flex",justifyContent:"space-between"
      }}>
        <Grid item marginLeft={10}>
        <Typography marginTop={"100px"} mx={10} variant='h3'
          sx={{
            fontSize: isSmallScreen ? '30px' : '50px',
            fontFamily: ['integral-Regular', 'sans-serif'].join(','),
            marginBottom: '50px',
          }}>PRINTING<br/>SERVICES</Typography>
          <Typography
                height={100}
                sx={{
                  width: isSmallScreen ? '300px' : '400px',
                  marginLeft: isSmallScreen ? '20px' : '80px',
                  marginBottom: '50px',
                }}
              >
                Unlock endless possibilities with our custom printing services, where your designs come to life with  recision and vibrancy, tailored to meet your unique branding and personalization needs.
              </Typography>
           </Grid>
        <Grid item
        display={"flex"}
         sx={{ 
          paddingRight:"70px",
          flexDirection:"row"
        }} >
         <Card number = "1" type={"Puff Printing"} bgImage={puff}  />
         <Card number = "2" type={"Screen Printing"} bgImage={screen}/>
         <Card number = "3" type={"Embroid"} bgImage={embroidry} />
         <Card number = "4" type={"Emboss printing"} bgImage={emboss} />
         <Card number = "5" type={"Direct to Flim"} bgImage={dtf} />
         <Card number = "6" type={"Hign Density"} bgImage={hd}/>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}
