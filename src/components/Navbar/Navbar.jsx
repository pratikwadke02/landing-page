import React from 'react'
import { images } from '../../constants'
import { Box, Typography } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';

const Navbar = () => {

    const navItems = [
        {
            name: 'HOME',
            icon: <HomeOutlinedIcon fontSize="large" sx={{color:'#fff'}}/>,
        },
        {
            name: 'THEMES',
            icon: <ContentCopyOutlinedIcon fontSize="large" sx={{color:'#fff'}} />,
        },
        {
            name: 'RULES',
            icon: <DescriptionOutlinedIcon fontSize="large" sx={{color:'#fff'}}/>,
        },
        {
            name: 'FAQS',
            icon: <LiveHelpOutlinedIcon fontSize="large" sx={{color:'#fff'}}/>,
        },
    ]

  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column', p:5}}>
        <Box sx={{}}>
            <img src={images.acm_logo} alt="" height={150}  />
        </Box>
        <Box>
            {
                navItems.map((item, index) => {
                    return (
                        <Box key={index} sx={{display:'flex', flexDirection:'column', alignItems:'center', cursor:'pointer', mt:5, mb:5}}>
                            <Box sx={{pt:'10px'}}>
                                {item.icon}
                            </Box>
                            <Box sx={{pb:'10px'}}>
                            <Typography variant="h6" sx={{color:'#fff'}}>{item.name}</Typography>
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    </Box>
    </>
  )
}

export default Navbar
