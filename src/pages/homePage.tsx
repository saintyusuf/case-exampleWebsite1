import { Box } from '@chakra-ui/react'
import Navbar from '../layout/navbar'
import Intro from '../sections/intro'
import FeaturedProducts from '../sections/featuredProducts'
import Video from '../sections/video'

const HomePage = () => {
  return (
    <Box maxW="1440px" mx="auto">
      <Navbar/>
      <Intro/>
      <FeaturedProducts/>
      <Video/>
    </Box>
  )
}

export default HomePage