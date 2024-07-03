import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

const colors = {
  primary: {
    Cyan: "hsl(180, 66%, 49%)",
    DarkViolet: "hsl(257, 27%, 26%)",
  },
  secondary: {
    Red: "hsl(0, 87%, 67%)",
  },
  neutral: {
    Gray: "hsl(0, 0%, 75%)",
    GrayishViolet: "hsl(257, 7%, 63%)",
    VeryDarkBlue: "hsl(255, 11%, 22%)",
    VeryDarkViolet: "hsl(260, 8%, 14%)",
  },
};

const fonts = { poppins: `"Poppins", sans-serif` };

export default extendTheme({
  styles: {
    global: {
      "*": {
        fontFamily: fonts.poppins,

        margin: "0",
        padding: "0",
      },
      a: {
        color: colors.neutral.GrayishViolet,
        transition: "all 0.2s",
      },
    },
  },
  colors,
  breakpoints,
});
