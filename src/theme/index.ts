import { extendTheme } from "@chakra-ui/react";
import "@fontsource/sora/300.css"
import "@fontsource/sora/400.css"
import "@fontsource/sora/500.css"
import "@fontsource/sora/600.css"
import "@fontsource/sora/700.css"

export default extendTheme({
  breakpoints: {
    sm: "300px",
    md: "768px",
    lg: "991px",
    xl: "1280px",
    "2xl": "1440px"
  },
  fonts: {
    heading: "Sora",
    body: "Sora"
  },
  global: {
    "input, textarea, button, select, a": {
      "WebkitTapHighlightColor": "transparent"
    }
  },
})