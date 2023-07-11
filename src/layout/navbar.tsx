import { Box, Button, IconButton, Img, Link, ListItem, UnorderedList, useMediaQuery } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu as IconMenu } from "react-icons/ai" 
import { IoMdClose as IconClose } from "react-icons/io" 
const Logo = require("../assets/images/logo/1.png")

const navbarItems = [
  {
    name: "Show All Tyres",
    href: "/show-all-tyres"
  },
  {
    name: "Find A Dealer",
    href: "/find-a-dealer"
  },
  {
    name: "Guides & Videos",
    href: "/guides-and-videos"
  },
  {
    name: "Go With",
    href: "/go-with"
  },
  {
    name: "Service & Help",
    href: "/service-and-help"
  }
]

const navbarMenuAnimationVariants = {
  initial: {
    right: "-100vw",
  },
  animate: {
    right: "0vw",
    transition: {duration: 0.2}
  }, 
  exit: {
    right: "-100vw",
  }
}

const Navbar = () => {

  const [isLargerThan991] = useMediaQuery("(min-width: 991px)")
  const [showNavbar, setShowNavbar] = useState(false)

  console.log(showNavbar, isLargerThan991)

  return (
    <Box w="100%" h={{sm: "56px", lg: "64px"}} display="flex" alignItems="center" pl={{sm: "21px", lg: "30px", xl: "60px"}} pr={{sm: "12px", lg: "30px", xl: "60px"}}>
      <Img src={Logo} h={{sm: "37px", lg: "44px"}} aspectRatio="170/44"/>

      <Button display={{sm: "block", lg: "none"}} bg="transparent!important" p="0" ml="auto" _focus={{"WebkitTapHighlightColor": "transparent!important", bg: "transparent"}} onClick={()=>setShowNavbar(!showNavbar)}>
        {
          showNavbar ? <IconClose style={{width: "28px", height: "28px"}}/> : <IconMenu style={{width: "28px", height: "28px"}}/>
        }
      </Button>
      
      <AnimatePresence>
        {
          (showNavbar || isLargerThan991) &&
          <Box listStyleType="none" m="0" ml="auto" zIndex={10}
            display={{sm: "flex", lg: "flex"}} 
            pos={{sm: "absolute", lg: "relative"}} 
            right={{sm: "0", lg: "initial"}} 
            top={{sm: "56px", lg: "initial"}} 
            w={{sm: "100vw", lg: "initial"}} 
            h={{sm: "calc(100vh - 56px)", lg: "initial"}} 
            bg={{sm: "#400E03", lg: "transparent"}} 
            flexDir={{sm: "column", lg: "row"}} 
            as={motion.div} variants={(showNavbar || !isLargerThan991) ? navbarMenuAnimationVariants : undefined} initial="initial" animate="animate" exit="exit"
          >
            {
              navbarItems.map((navbarItem,i)=>
                <Box key={i}
                  borderBottom={{sm: "1px solid #525252", lg: "0"}} 
                >
                  <Link href={navbarItem.href} textTransform="uppercase" fontSize="14px" fontWeight="600" display="block"
                    color={{sm: "#fff", lg: "#400E03"}} 
                    lineHeight={{sm: "24px", lg: "18px"}} 
                    px={{sm: "24px", lg: "5px"}} 
                    py={{sm: "24px", lg: "0"}} 
                    mx={{sm: "0", lg: "15px"}} 
                  >{navbarItem.name}</Link>
                </Box>
              )
            }
          </Box>
        }
      </AnimatePresence>
    </Box>
  )
}

export default Navbar