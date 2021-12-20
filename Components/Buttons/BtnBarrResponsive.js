import { useState } from "react";

const BtnBarrResponsive = ({content}) =>{
    const [close, setClose] = useState(false);
    const handleClick = () => {
        setClose(!close);
        content && content.current.classList.toggle('Header_Nav-Responsive');
    }
    
    return(
        <i className={`fas ${close ? "fa-times"  :"fa-bars"} fa-2x Header_Barr`}
        onClick={handleClick}
        area-hidden="true"
        ></i>
    )
}

export default BtnBarrResponsive