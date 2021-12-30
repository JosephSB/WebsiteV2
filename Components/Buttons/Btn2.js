import IconSvg from "../Items/IconSvg"

const Btn2 = ({message,action,icon}) =>{
    return(
        <button className="Btn_Download" onClick={action}>
            <IconSvg src={icon}/>
            &nbsp;{message} 
        </button>
    )
}

export default Btn2