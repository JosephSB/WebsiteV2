import { useState } from "react";
import IconSvg from "../Items/IconSvg";

const BtnBarrResponsive = ({content}) =>{
    const [close, setClose] = useState(false);
    const handleClick = () => {
        setClose(!close);
        content && content.current.classList.toggle('Header_Nav-Responsive');
    }
    
    return(
        <div onClick={handleClick} className="Header_Barr">
            <IconSvg size={4} src={`svg/${close ? "close"  :"bar"}.svg`}/>
        </div>
    )
}

export default BtnBarrResponsive