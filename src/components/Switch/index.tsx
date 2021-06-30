import Switch from "react-switch";
import { useTheme } from "../../hooks/useTheme";

export const SwitchButton: React.FC = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={30}
      onColor="#E964FC"
      offColor="#5C5470"
    />
  )
}
