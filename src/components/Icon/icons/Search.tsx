/** @jsxImportSource theme-ui */
import React from "react";
import { IconProps, rotation } from "./types";

const Search: React.FC<IconProps> = ({ direction = "down", color = "brown", width, getStyles }) => {
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
    <svg width={width || "14"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M10.9345 10.958C11.2051 10.6893 11.6388 10.6893 11.9093 10.958L13.6976 12.4015H13.7287C14.0904 12.7672 14.0904 13.3601 13.7287 13.7257C13.3669 14.0914 12.7803 14.0914 12.4185 13.7257L10.9345 12.0249L10.8782 11.9614C10.7733 11.8286 10.7153 11.6631 10.7153 11.4915C10.7153 11.2913 10.7942 11.0993 10.9345 10.958ZM6.00435 0C7.5968 0 9.12403 0.639405 10.2501 1.77755C11.3761 2.9157 12.0087 4.45936 12.0087 6.06895C12.0087 9.42074 9.32046 12.1379 6.00435 12.1379C2.68824 12.1379 0 9.42074 0 6.06895C0 2.71716 2.68824 0 6.00435 0Z"
        fill="#FDFBF5"
      />
    </svg>
  );
};

export default Search;
