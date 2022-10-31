import React, {useState, useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { getRemainingTimeUntilMsTimestamp } from '../utils/TimerUtil';

const defaultRemainingTime = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
}


const Main = ({countdownTimestampMs}) => {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
        const interval = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    }

    const socials = [
        {
            icon: <InstagramIcon fontSize="large" sx={{color:'#fff'}}/>,
            link: 'https://www.instagram.com/djsanghvi_acm/',
        },
        {
            icon: <LinkedInIcon fontSize="large" sx={{color:'#fff'}}/>,
            link: 'https://www.linkedin.com/company/dj-sanghvi-acm/',
        },
        {
            icon: <LanguageIcon fontSize="large" sx={{color:'#fff'}}/>,
            link: 'http://djacm.co.in/',
        },
    ]

  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column', width:'100%', }}>
        <Box sx={{width:'100%', height:'10vh'}}>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', p:5, float:'right'}}>
                {
                    socials.map((item, index) => {
                        return (
                            <Box key={index} sx={{cursor:'pointer', m:2}}>
                                <a href={item.link} target="_blank" rel="noreferrer">
                                {item.icon}
                                </a>
                            </Box>
                        )
                    }
                    )
                }
            </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', maxWidth:'900px', p:6, height:'30vh' }}>
            <Box sx={{display:'flex', flexDirection:'column', mt:10,width:'100%', alignItems:'initial'}}>
                <Typography variant="h1" sx={{color:'#fff', fontSize:'150px'}}>LOC 5.0</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:10, borderTop: '#fff 15px solid', maxWidth:'550px'}}>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'initial', mt:10,}}>
                <Typography variant="h1" sx={{color:'#fff', fontSize:'60px'}}>LINES OF CODE</Typography>
            </Box>
        </Box>
        <Box sx={{width:'100%',mt:10, height:'20vh', display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
            <Box sx={{mt:10, p:5, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Box sx={{display:'flex', flexDirection:'column', borderRight:'#fff 3px solid', p:2, alignItems:'center',}}>
                    <Box>
                    <Typography  sx={{color:'#fff', fontSize:'32px'}}>{remainingTime.days}</Typography>
                    </Box>
                    <Box>
                        <Typography  sx={{color:'#fff', fontSize:'32px'}}>Days</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', borderRight:'#fff 3px solid', p:2, alignItems:'center'}}>
                    <Box>
                    <Typography  sx={{color:'#fff', fontSize:'32px'}}>{remainingTime.hours}</Typography>
                    </Box>
                    <Box>
                        <Typography  sx={{color:'#fff', fontSize:'32px'}}>Hours</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', borderRight:'#fff 3px solid', p:2, alignItems:'center'}}>
                    <Box>
                    <Typography  sx={{color:'#fff', fontSize:'32px'}}>{remainingTime.minutes}</Typography>
                    </Box>
                    <Box>
                        <Typography  sx={{color:'#fff', fontSize:'32px'}}>Mins</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', p:3, alignItems:'center'}}>
                    <Box>
                    <Typography sx={{color:'#fff', fontSize:'32px'}}>{remainingTime.seconds}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{color:'#fff', fontSize:'32px'}}>Secs</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Main
