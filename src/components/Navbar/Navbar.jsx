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
            icon: <HomeOutlinedIcon fontSize="large" sx={{color:'#fff', fontSize:'30px'}}/>,
        },
        {
            name: 'THEMES',
            icon: <ContentCopyOutlinedIcon fontSize="large" sx={{color:'#fff', fontSize:'30px'}} />,
        },
        {
            name: 'RULES',
            icon: <DescriptionOutlinedIcon fontSize="large" sx={{color:'#fff', fontSize:'30px'}}/>,
        },
        {
            name: 'FAQS',
            icon: <LiveHelpOutlinedIcon fontSize="large" sx={{color:'#fff', fontSize:'30px'}}/>,
        },
    ]

  return (
    <>
    <Box sx={{display:{md:'flex'}, flexDirection:'column',alignItems:'center', width:'100%'}}>
        <Box sx={{}}>
            <a href="http://djacm.co.in/">
            <img src={images.acm_logo} alt=""  style={{width:'100%', height:'auto', maxHeight:'150px'}} />
            </a>
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
                            <Typography variant="h4" sx={{color:'#fff'}}>{item.name}</Typography>
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
