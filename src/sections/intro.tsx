import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'
import Button from '../components/button'
const Image = require("../assets/images/intro/1.png")

const Intro = () => {
  return (
    <Box w="100%" h={{sm: "100vw", "md": "472px"}} pos="relative">
      <Img src={Image} w="100%" h="100%" objectFit="cover"/>
      <Text pos="absolute" left="50%" top="36%" transform="translate(-50%, -36%)" fontWeight="700" lineHeight="normal" color="#fff" textAlign="center" p="10px"
        fontSize={{sm: "38px", "md": "56px"}} 
        w={{sm: "100%", "md": "524px"}}
      >Nothing can stop you</Text>
      <Button variant="third" sxDiv={{pos:"absolute", left:"50%", transform:"translateX(-50%)", 
        bottom:{sm: "27.5%", "md": "27%"},
        w:{sm: "133px", "md": "183px"}, 
        h: {sm: "39px", "md": "52px"}}}
        sx={{fontSize:{sm: "12px", "md": "16px"}}}
      >Find Out More</Button>
    </Box>
  )
}

export default Intro