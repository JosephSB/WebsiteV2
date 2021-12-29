import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import IconSvg from "../Items/IconSvg";

const BtnTheme = () => {
    const { handleTheme,theme } = useContext(ThemeContext);

    return (
        <button className="BtnTheme" onClick={handleTheme}>
            <IconSvg size={1} src={`svg/${theme}.svg`}/>
        </button>
    )
}

export default BtnTheme