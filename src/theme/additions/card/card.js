import { mode } from "@chakra-ui/theme-tools";

const Card = {
  baseStyle: (props) => ({
    p: "20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    borderRadius: "20px",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: mode("white", "navy.800")(props),
    boxShadow: mode("0px 18px 40px rgba(112, 144, 176, 0.12)", "none")(props), // Added boxShadow
    border: mode("none", "1px solid navy.800")(props), // Added border
  }),
};

export const CardComponent = {
  components: {
    Card,
  },
};
