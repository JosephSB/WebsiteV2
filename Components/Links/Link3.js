import Link from "next/link"

const Link3 = ({Route,icon,text}) =>{
    return(
        <Link href={Route} >
            <a target="_blank" className="Nav_Link3">
                <i className={`${icon} fa-2x`}></i>
                {text}
            </a>
        </Link>
    )
}

export default Link3