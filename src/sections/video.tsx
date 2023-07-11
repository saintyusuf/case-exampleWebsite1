import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Button from '../components/button'

const Video = () => {
  return (
    <Box bg="#434448" p={{sm: "16px", "md": "50px"}} display="flex" flexDir={{sm: "column", "md": "row"}} alignItems="center" justifyContent="space-between" flexWrap="wrap">
      <Box w={{sm: "100%", "md": "60%"}} order={1}>
        <Text fontSize={{sm: "24px", "md": "40px"}} fontWeight="700" lineHeight="normal" color="#fff">Feel the excellent wet braking with Driveways!</Text>
      </Box>

      <Box w={{sm: "100%", "md": "40%"}} order={{sm: 3, "md": 2}}>
        <Button variant="third" sx={{fontSize: {sm: "12px", "md": "16px"}}} sxDiv={{w: {sm: "100%", "md": "308px"}, h: {sm: "47px", "md": "52px"}, ml: "auto"}}>Watch All Videos</Button>
      </Box>

      <Box w={{sm: "100%", "md": "100%"}} aspectRatio="343/193" order={{sm: 2, "md": 3}} mt={{sm: "16px", "md": "40px"}} mb={{sm: "16px", "md": "0"}}>
        <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/D-F0CTTFxYw" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen/>
      </Box>
    </Box>
  )
}

export default Video