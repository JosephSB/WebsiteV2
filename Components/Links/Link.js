import Link from "next/link"

const Link1 = ({Name,Route,active}) =>{
    return (
        <li className="Nav_Item">
            <Link href={Route}>
                <a className={`Nav_Link ${active}`}>{Name}</a>
            </Link>
        </li>
    )
}

export default Link1