import React from "react";
import { IconProps, rotation } from "./types";

const BSC: React.FC<IconProps> = ({ direction = "down", color = "navMenuLogo", width, getStyles }) => {
  const deg: rotation = {
    left: 90,
    up: 180,
    right: 270,
    down: 0,
  };
  const style = getStyles({
    degree: deg[direction as keyof rotation],
    color,
  });

  return (
    <svg width={width || "25"} height="auto" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.4722 24C19.0996 24 24.4722 18.6274 24.4722 12C24.4722 5.37258 19.0996 0 12.4722 0C5.84475 0 0.472168 5.37258 0.472168 12C0.472168 18.6274 5.84475 24 12.4722 24Z"
        fill="#F3BA2F"
      />
      <path
        d="M9.55868 10.803L12.4717 7.89L15.3862 10.8045L17.0812 9.1095L12.4717 4.5L7.86368 9.108L9.55868 10.803ZM4.97168 12L6.66668 10.305L8.36168 12L6.66668 13.695L4.97168 12ZM9.55868 13.197L12.4717 16.11L15.3862 13.1955L17.0812 14.8898L12.4717 19.5L7.86368 14.892L7.86143 14.8898L9.55868 13.197ZM16.5817 12L18.2767 10.305L19.9717 12L18.2767 13.695L16.5817 12ZM14.1907 11.9985H14.1922V12L12.4717 13.7205L10.7534 12.003L10.7504 12L10.7534 11.9978L11.0542 11.6963L11.2004 11.55L12.4717 10.2795L14.1914 11.9993L14.1907 11.9985Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};

export default BSC;
