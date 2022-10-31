import React, {useState, useEffect} from 'react'
import {Box, IconButton, Typography, SwipeableDrawer, ListItem, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { getRemainingTimeUntilMsTimestamp } from '../utils/TimerUtil';
import MenuIcon from '@mui/icons-material/Menu';
import {images} from '../../constants'

const defaultRemainingTime = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
}


const Main = ({countdownTimestampMs}) => {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
        const interval = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(interval)
    }, [countdownTimestampMs])

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

    const socialsSmall = [
        {
            icon: <InstagramIcon fontSize="medium" sx={{color:'#fff'}}/>,
            link: 'https://www.instagram.com/djsanghvi_acm/',
            text: 'djsanghvi_acm',
        },
        {
            icon: <LinkedInIcon fontSize="medium" sx={{color:'#fff'}}/>,
            link: 'https://www.linkedin.com/company/dj-sanghvi-acm/',
            text: 'DJSCE ACM Student Chapter',
        },
        {
            icon: <LanguageIcon fontSize="medium" sx={{color:'#fff'}}/>,
            link: 'http://djacm.co.in/',
            text: 'djacm.co.in',
        },
    ]

    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setDrawerOpen(!drawerOpen);
      };

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor:'#06021B', height:'100%', display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', paddingTop:'20px' }}
          role="presentation"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          <Box sx={{width:'100%'}}>
            <img src={images.acm_logo} alt="" height={50} style={{marginLeft:'10px'}}/>
          </Box>
          <List sx={{display:'flex', flexDirection:'column'}}>
            {
                socialsSmall.map((social, index) => (
                    <a href={social.link} target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'#fff'}}>
                    <ListItem button key={index} sx={{width:'100%', display:'flex', justifyContent:'start', alignItems:'center', paddingLeft:'20px'}}>
                            <ListItemIcon>
                            {social.icon}
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="h6" sx={{color:'#fff'}}>
                                    {social.text}
                                </Typography>
                            </ListItemText>
                    </ListItem>
                    </a>
                ))
            }
          </List>
        </Box>
      );
    


  return (
    <>
    <SwipeableDrawer
            anchor={'left'}
            open={drawerOpen}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
    </SwipeableDrawer>
    <Box sx={{display:'flex', flexDirection:'column', width:'100%', }}>
        <Box sx={{width:'100%', height:'10vh', display:'flex', flexDirection:'row', justifyContent:'end'}}>
            <Box sx={{display:{md:'none'}, width:'100%', p:{xs:2, md:5}}}>
                <IconButton sx={{color:'#fff'}} onClick={toggleDrawer('left', true)}>
                    <MenuIcon fontSize="medium" />
                </IconButton>
            </Box>
            <Box sx={{display:{xs:'none', md:'flex'}, flexDirection:'row', justifyContent:'space-between', p:{xs:2, md:5}, float:'right'}}>
                {
                    socials.map((item, index) => {
                        return (
                            <Box key={index} sx={{cursor:'pointer', m:{xs:1, md:2}}}>
                                <a href={item.link} target="_blank" rel="noreferrer">
                                {item.icon}
                                </a>
                            </Box>
                        )
                    }
                    )
                }
            </Box>
            <Box sx={{display:{xs:'flex', md:'none'}, flexDirection:'row', justifyContent:'space-between', p:{xs:2, md:5}, float:'right'}}>
                {
                    socialsSmall.map((item, index) => {
                        return (
                            <Box key={index} sx={{cursor:'pointer', m:{xs:1, md:2}}}>
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
        <Box sx={{display:'flex', flexDirection:'column', maxWidth:'900px', p:{xs:3, sm:6}, height:'30vh', alignItems:{xs:'center', sm:'start'} }}>
            <Box sx={{display:'flex', flexDirection:'column', mt:{xs:7, sm:10},width:'100%', textAlign:{xs:'center', sm:'start'}}}>
                <Typography variant="h1" sx={{color:'#fff', fontSize:{xs:'80px', sm:'100px', md:'150px'}}}>LOC 5.0</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:10, borderTop: {xs:'#fff 10px solid', md:'#fff 15px solid'}, maxWidth:{xs:'350px', md:'550px'}, width:'100%'}}>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', mt:{xs:5, md:10},}}>
                <Typography variant="h1" sx={{color:'#fff', fontSize:{xs:'30px', md:'60px'}}}>LINES OF CODE</Typography>
            </Box>
        </Box>
        <Box sx={{width:'100%',mt:10, height:'20vh', display:'flex', flexDirection:'column', alignItems:{xs:'center', sm:'flex-end'}}}>
            <Box sx={{mt:10, p:{xs:0, md:5}, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Box sx={{display:'flex', flexDirection:'column', borderRight:'#fff 3px solid', p:2, alignItems:'center',}}>
                    <Box>
                    <Typography  sx={{color:'#fff', fontSize:{xs:'20px', md:'32px'}}}>{remainingTime.days}</Typography>
                    </Box>
                    <Box>
                        <Typography  sx={{color:'#fff', fontSize:{xs:'20px', md:'32px'}}}>Days</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', borderRight:'#fff 3px solid', p:2, alignItems:'center'}}>
                    <Box>
                    <Typography  sx={{color:'#fff', fontSize:{xs:'20px', md:'32px'}}}>{remainingTime.hours}</Typography>
                    </Box>
                    <Box>
                        <Typography  sx={{color:'#fff', fontSize:{xs:'20px', md:'32px'}}}>Hours</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', borderRight:'#fff 3px solid', p:2, alignItems:'center'}}>
                    <Box>
                    <Typography  sx={{color:'#fff', fontSize:{xs:'20px', md:'32px'}}}>{remainingTime.minutes}</Typography>
                    </Box>
                    <Box>
                        <Typography  sx={{color:'#fff', fontSize:{xs:'20px', md:'32px'}}}>Mins</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', p:3, alignItems:'center'}}>
                    <Box>
                    <Typography sx={{color:'#fff', fontSize:{xs:'20px', md:'32px'}}}>{remainingTime.seconds}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{color:'#fff', fontSize:{xs:'20px', md:'32px'}}}>Secs</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Main
