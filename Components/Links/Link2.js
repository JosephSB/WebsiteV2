import Link from "next/link";
import IconSvg from "../Items/IconSvg";

const Link2 = ({ icon, Route }) => {
  return (
    <li className="Nav_Item">
      <Link href={Route}>
        <a target="_blank" className="Nav_Link2">
          <IconSvg src={`${process.env.API_URL}${icon}`} />
        </a>
      </Link>
    </li>
  );
};

export default Link2;
