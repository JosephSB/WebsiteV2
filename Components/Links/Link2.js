import Link from "next/link"

const Link2 = ({icon,Route}) =>{
    return (
        <li className="Nav_Item">
            <Link href={Route} >
                <a target="_blank" className="Nav_Link2">
                    <i className={`fab ${icon} fa-2x`}></i>
                </a>
            </Link>
        </li>
    )
}

export default Link2