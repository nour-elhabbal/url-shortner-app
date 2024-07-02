import { extendTheme } from "@chakra-ui/react";

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
      },
    },
  },
  colors,
});
