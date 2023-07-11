import React, { useRef, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import Button from '../components/button'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import "swiper/css"
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {FiArrowLeft as IconLeft, FiArrowRight as IconRight} from "react-icons/fi"

const swiperItems = [
  {
    title: "Iceways",
    description: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
  },
  {
    title: "Driveways Sport",
    description: "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."
  },
  {
    title: "Driveways COMPETUS H/P",
    description: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
  },
  {
    title: "Iceways",
    description: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
  },
  {
    title: "Driveways Sport",
    description: "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."
  }
]

const FeaturedProducts = () => {
    
  return (
    <Box p={{sm: "32px 0 26px 0", "md": "72px"}} bg="#F9F6F6">
      <Text variant="h1" textAlign={{sm: "left", "md": "center"}} fontSize={{sm: "24px", "md": "32px"}} fontWeight="700" lineHeight="normal" pl={{sm: "16px", "md": "0"}}>Featured Products</Text>
        <Box
          sx={{
            "&": {
              pos: "relative"
            },
            "& .swiper": {
              my: {sm: "24px", "md": "48px"},
              mx: {sm: "27px", "md": "58px"},
              "& .swiper-wrapper": {
                display: "flex",
                h: {sm: "257px", "md": "235px"},
                "& .swiper-slide": {
                  h: "100%"
                }
              }
            }
          }}
        >
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            modules={[Pagination, Navigation]}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet(index, className) {
                return `<div class="${className}"></div>`
              },
            }}
            navigation={{
              enabled: true,
              prevEl: ".swiper-navigation-prev",
              nextEl: ".swiper-navigation-next",
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                navigation:{
                  enabled: false
                }
              },
              991: {
                slidesPerView: 2,
                navigation:{
                  enabled: true
                }
              },
              1280: {
                slidesPerView: 3,
                navigation:{
                  enabled: true
                }
              }
            }}
          >
            {
              swiperItems.map((swiperItem,i)=>
                <SwiperSlide key={i}>
                  <Box display="flex" flexDir="column" h="100%" bg="#fff" border="1px solid #E0D8D7" borderBottom="4px solid #ED1C24" borderRadius="2px">
                    <Box p="24px 24px 0 24px">
                      <Text fontSize="20px" fontWeight="600" lineHeight="136%" textTransform="uppercase" mb="12px" noOfLines={1}>{swiperItem.title}</Text>
                      <Text fontSize="14px" fontWeight="400" lineHeight="160%" noOfLines={4}>{swiperItem.description}</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mt="auto" px="8px" pb="12px">
                      <Button variant="second" fontSize="12" sxDiv={{w: "49%", h: "47px"}}>Learn More</Button>
                      <Button variant="first" fontSize="12" sxDiv={{w: "49%", h: "47px"}}>Find A Dealer</Button>
                    </Box>
                  </Box>
                </SwiperSlide>
              )
            }
          </Swiper>
          <Box className="swiper-pagination"
            sx={{
              "&": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pos: "relative",
                w: "100%",
                h: "12px",
                zIndex: 1,
                "& .swiper-pagination-bullet": {
                  mx: "6px",
                  w: "6px",
                  h: "6px",
                  bg: "#ED1C24!important",
                  opacity: "1",
                  transition: "200ms",
                  cursor: "pointer",
                  "&.swiper-pagination-bullet-active": {
                    w: "12px",
                    h: "12px"
                  }
                }
              }
            }}
          />
          <Box className="swiper-navigation"
            sx={{
              "&": {
                display: {sm: "none", "md": "block"}
              },
              "& div": {
                pos: "absolute",
                top:"40%",
                transform:"translateY(-40%)",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                bg:"#400E03",
                color:"#fff",
                w:"48px",
                h:"48px",
                transition: "200ms",
                cursor: "pointer",
                "&:hover": {
                  bg:"#400E03dd",
                },
                "&:active": {
                  "WebkitTapHighlightColor": "transparent!important"
                }
              }
            }}
          >
            <Box className="swiper-navigation-prev" left="-12.5px"><IconLeft/></Box>
            <Box className="swiper-navigation-next" right="-12.5px"><IconRight/></Box>
          </Box>
        </Box>
    </Box>
  )
}

export default FeaturedProducts