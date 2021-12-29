import IconSvg from "../Items/IconSvg"

const Btn1 = ({message,route,icon}) =>{
    return(
        <a href={route} target="_blank">
            <button className="Btn_Download">
                <IconSvg src={icon}/>
                &nbsp;{message} 
            </button>
        </a>
    )
}

export default Btn1