import React from 'react'
import {Box, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const Main = () => {
    const socials = [
        {
            icon: <InstagramIcon fontSize="large" sx={{color:'#fff'}}/>,
            link: 'https://www.instagram.com/acm_svnit/',
        },
        {
            icon: <LinkedInIcon fontSize="large" sx={{color:'#fff'}}/>,
            link: 'https://www.linkedin.com/company/acm-svnit/',
        },
        {
            icon: <LanguageIcon fontSize="large" sx={{color:'#fff'}}/>,
            link: 'https://acm.svnit.ac.in/',
        },
    ]

  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>
        <Box sx={{width:'100%'}}>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', p:5, float:'right'}}>
                {
                    socials.map((item, index) => {
                        return (
                            <Box key={index} sx={{cursor:'pointer', m:2}}>
                                {item.icon}
                            </Box>
                        )
                    }
                    )
                }
            </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', maxWidth:'900px', }}>
            <Box sx={{display:'flex', flexDirection:'column', mt:10,width:'100%', alignItems:'initial'}}>
                <Typography variant="h1" sx={{color:'#fff'}}>LOC 5.0</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:10, borderTop: '#fff 15px solid'}}>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'initial', mt:10,}}>
                <Typography variant="h1" sx={{color:'#fff'}}>LINES OF CODE</Typography>
            </Box>
        </Box>
        <Box sx={{width:'100%', mt:15}}>
            <Box sx={{float:'right', p:5}}>
                <Typography variant="h1" sx={{color:'#fff'}}>COMING SOON</Typography>
            </Box>
        </Box>
        <Box sx={{width:'100%'}}>
            <Box sx={{}}>
                <Typography variant="h1" sx={{color:'#fff'}}>CONTACT US</Typography>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Main
