import Link from "next/link";
import IconSvg from "../Items/IconSvg";

const Btn1_SPA = ({ message, route, icon }) => {
  return (
    <Link href={route}>
      <a>
        <button className="Btn_Download">
          <IconSvg src={`https://josephsb-api.vercel.app/${icon}`} />
          &nbsp;{message}
        </button>
      </a>
    </Link>
  );
};

export default Btn1_SPA;
