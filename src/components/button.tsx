import React, { FC, ReactNode } from 'react'
import {Box, Button as ButtonElem, SystemStyleObject} from "@chakra-ui/react"

interface Props {
  variant: "first" | "second" | "third"
  fontSize?: "16" | "12"
  children?: ReactNode
  sxDiv?: SystemStyleObject
  sx?: SystemStyleObject
}

const colorStyles = {
  first: {
    bg: "#ED1C24",
    bgHover: "#ED1C24dd",
    color: "#fff"
  },
  second: {
    bg: "#FDE4E5",
    bgHover: "#FDE4E5aa",
    color: "#ED1C24"
  },
  third: {
    bg: "#fff",
    bgHover: "#f3f3f3",
    color: "#ED1C24"
  }
}

const Button:FC<Props> = (props) => {
  return (
    <Box sx={props.sxDiv}>
      <ButtonElem 
        bg={colorStyles[props.variant].bg} 
        color={colorStyles[props.variant].color} 
        _hover={{bg: colorStyles[props.variant].bgHover, 
          "WebkitTapHighlightColor": "transparent!important"
        }} 
        _active={{"&": {transform: "scale(0.9)"}}} 
        w="100%"
        h="100%"
        borderRadius="0" 
        textTransform="uppercase" 
        fontWeight="700" 
        fontSize={props.fontSize ? props.fontSize : "16px"} 
        lineHeight="normal" sx={props.sx}>
        {props.children}
      </ButtonElem>
    </Box>
  )
}

export default Button