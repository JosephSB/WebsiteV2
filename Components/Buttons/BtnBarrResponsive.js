import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import IconSvg from "../Items/IconSvg";

const BtnBarrResponsive = ({ content }) => {
  const [close, setClose] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setClose(!close);
    content && content.current.classList.toggle("Header_Nav-Responsive");
  };

  useEffect(() => {
    if (close) handleClick();
  }, [router.pathname]);

  return (
    <div onClick={handleClick} className="Header_Barr">
      <IconSvg
        size={4}
        src={`https://josephsb-api.vercel.app/svg/${
          close ? "close" : "bar"
        }.svg`}
      />
    </div>
  );
};

export default BtnBarrResponsive;
