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
            // background: `url(${images.bg})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            minHeight: {xs:'100%', sm:'100vh'},
            height: '100%',
        }}>
            <video autoPlay loop muted
                src={images.bg_mov}
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%', 
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1'
                }}
            />
            <Box sx={{display:{xs:'none', md:'flex'} ,width:'100%', maxWidth:"200px"}}>
                <Navbar/>
            </Box>
            <Box sx={{width:'100%'}}>
                <Main countdownTimestampMs={1677974399000}/>
            </Box>
        </Box>
    </>
  )
}

export default Landing
