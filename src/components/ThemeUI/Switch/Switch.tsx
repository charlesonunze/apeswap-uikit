import React, { useState, useEffect } from "react";
import { Box, Button } from "theme-ui";
import { buttonFontSizes, SwitchProps } from "./Switch.interface";
import styles from "./styles";

const Switch: React.FC<SwitchProps> = ({ checked, onChange, size = "normal" }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleClick = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <Box
      sx={{
        ...styles.switch,
        background: "lvl1",
      }}
    >
      <Button
        sx={{ ...styles.switch, background: isChecked ? "transparent" : "yellow", fontSize: buttonFontSizes[size] }}
        onClick={handleClick}
      >
        Switch
      </Button>

      <Button
        sx={{ ...styles.switch, background: isChecked ? "yellow" : "transparent", fontSize: buttonFontSizes[size] }}
        onClick={handleClick}
      >
        Switch
      </Button>
    </Box>
  );
};

export default Switch;
