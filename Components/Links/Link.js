import Link from "next/link"

const Link1 = ({Name,Route}) =>{
    return (
        <li className="Nav_Item">
            <Link href={Route}>
                <a className="Nav_Link">{Name}</a>
            </Link>
        </li>
    )
}

export default Link1