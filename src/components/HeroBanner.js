import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px',
              xs: '70px' },
        ml: { sm: '50px' }
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography 
            fontWeight={700} 
            mb='20px' 
            mt='30px'
            sx={{ fontSize: { lg: '44px', sm: '40px' }}}>
            Sweat, Smile <br /> Repeat.
        </Typography>
        <Typography 
            fontSize='22px' 
            lineHeight='35px' 
            mb={3}>
            Search Effective Exercises
        </Typography>
        <Typography 
            fontWeight={600}
            color='#ff2625'
            sx={{
                opacity: 0.3,
                display: { lg: 'block', xs: 'none'}
            }}
            fontSize='200px'>
                Exercise
        </Typography>
        <Button 
            variant='contained' 
            color='error'
            sx={{
                backgroundColor: '#FF2625',
                padding: '8px'
            }}>
                Explore Exercises
        </Button>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner