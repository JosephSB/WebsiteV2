import Link from "next/link"
import IconSvg from "../Items/IconSvg"

const Link3 = ({Route,icon,text}) =>{
    return(
        <Link href={Route} >
            <a target="_blank" className="Nav_Link3">
                <IconSvg src={icon}/>
                {text}
            </a>
        </Link>
    )
}

export default Link3