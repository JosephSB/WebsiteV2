import BtnDownload from "../Components/Buttons/BtnDownload"

const Home = () => {
  return (
    <main className="container Home">
      <div className="Home_Details">
        <h2 className="Home_Subtitle">Hola, me llamo</h2>
        <h1 className="Home_Title">&gt;_ Joseph Silva Bendezu</h1>
        <h3 className="Home_Subtitle">Programador Frontend</h3>
        <BtnDownload message="DESCARGAR CV"/>
      </div>
      <figure className="Home_Img">

      </figure>
    </main>
  )
}

export default Home