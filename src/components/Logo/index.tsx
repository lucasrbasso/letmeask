import defaultLogo from '../../assets/images/defaultLogo.svg';
import whiteLogo from '../../assets/images/whiteLogo.svg';

import { useEffect, useState } from "react"
import { useTheme } from "../../hooks/useTheme";

export function Logo () {

  const [logoImg, setLogoImg] = useState(defaultLogo);

  const { theme } = useTheme();

  useEffect(() => {
    if(theme.title === 'light') {
      setLogoImg(defaultLogo)
    } else {
      setLogoImg(whiteLogo)
    }
  }, [theme])

  return (
    <img src={logoImg} alt="letmeask"/>
  )
}
