import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'
import {images} from '../constants'

const Landing = () => {
  return (
    <>
        <Box sx={{
            display:'flex', 
            flexDirection: 'row',
            background: `url(${images.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
        }}>
            <Box>
                <Navbar/>
            </Box>
            <Box sx={{width:'100%'}}>
                <Main/>
            </Box>
        </Box>
    </>
  )
}

export default Landing
