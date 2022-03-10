import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <img alt="AnubiSwap" src="/images/cub/header_logo_wide.svg" style={{width: "150px", height: "50px"}} />
  );
};

export default Logo;
