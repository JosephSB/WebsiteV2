import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

const BtnTheme = () => {
    const { handleTheme,theme } = useContext(ThemeContext);

    return (
        <button className="BtnTheme" onClick={handleTheme}>
            <i className={`fas fa-${theme}`} aria-hidden="true"></i>
        </button>
    )
}

export default BtnTheme