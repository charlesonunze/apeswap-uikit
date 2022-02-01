import { ThemeUIStyleObject } from "theme-ui";

const baseStyle = {
  p: 9,
  borderRadius: "normal",
  background: "navbar",
  //   boxShadow: "0px 25px 55px 20px rgba(0, 0, 0, 0.1)",
};

const baseDirectionArrow = {
  content: '""',
  display: "block",
  width: 0,
  border: "12px solid transparent",
};

const bottomRight = {
  bottom: 2,
  ...baseDirectionArrow,
  borderBottom: 0,
  borderTopWidth: "15px",
  borderTopStyle: "solid",
  borderTopColor: "navbar",
  right: "3%",
  transform: "translate(-50%, calc(100% + 5px))",
};

const bottomLeft = {
  bottom: 2,
  ...baseDirectionArrow,
  borderBottom: 0,
  borderTopWidth: "15px",
  borderTopStyle: "solid",
  borderTopColor: "navbar",
  left: "12%",
  transform: "translate(-50%, calc(100% + 5px))",
};

const topRight = {
  top: 2,
  ...baseDirectionArrow,
  borderTop: 0,
  borderBottomWidth: "15px",
  borderBottomStyle: "solid",
  borderBottomColor: "navbar",
  right: "3%",
  transform: "translate(-50%, calc(-100% - 5px))",
};

const topLeft = {
  top: 2,
  ...baseDirectionArrow,
  borderTop: 0,
  borderBottomWidth: "15px",
  borderBottomStyle: "solid",
  borderBottomColor: "navbar",
  left: "12%",
  transform: "translate(-50%, calc(-100% - 5px))",
};

const styles: Record<string, ThemeUIStyleObject> = {
  1: {
    position: "relative",
    color: "brown",
    fontSize: 0,
    lineHeight: "18px",
    fontWeight: "normal",
    ...baseStyle,
  },
  2: {
    position: "relative",
    color: "brown",
    fontSize: 0,
    lineHeight: "18px",
    fontWeight: "normal",
    ...baseStyle,
  },
  3: {
    position: "relative",
    color: "brown",
    fontSize: 0,
    lineHeight: "18px",
    fontWeight: "normal",
    ...baseStyle,
  },
  4: {
    position: "relative",
    color: "brown",
    fontSize: 2,
    lineHeight: "24px",
    fontWeight: "normal",
    ...baseStyle,
  },
  bottomRight: {
    "&::before": {
      position: "absolute",
      ...bottomRight,
    },
  },
  bottomLeft: {
    "&::before": {
      position: "absolute",
      ...bottomLeft,
    },
  },
  topRight: {
    "&::before": {
      position: "absolute",
      ...topRight,
    },
  },
  topLeft: {
    "&::before": {
      position: "absolute",
      ...topLeft,
    },
  },
  linkWrapper: {
    justifyContent: "center",
    gap: 3,
    alignItems: "center",
    fontWeight: "bold",
    textDecoration: "underline",
    svg: {
      fill: "brown",
      path: "brown",
    },
  },
  flex: {
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 0,
    lineHeight: "18px",
    color: "brown",
    "span:nth-child(2)": {
      fontWeight: "bold",
    },
  },
};

export default styles;