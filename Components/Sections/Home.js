import Image from "next/image";
import BtnDownload from "../Buttons/BtnDownload";

const Home = () => {
  return (
    <main className="container Home bg_radial degradado">
      <div className="Home_Container ">
        <div className="Home_Details">
          <h2 className="Home_Subtitle">Hola, me llamo</h2>
          <h1 className="Home_Title glow_green">&gt;_ Joseph Silva Bendezu</h1>
          <h3 className="Home_Subtitle">Programador Frontend</h3>
          <BtnDownload message="DESCARGAR CV" />
        </div>
        <figure className="Home_Img">
          <Image       
          src="/Img/FotoYo.png"
          alt="JosephSB"
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL="/Img/FotoYo.png"
          />
        </figure>
      </div>
    </main>
  );
};

export default Home;