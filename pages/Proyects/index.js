import CardProyect from "../../Components/cards/CardProyect";

const Proyects = ({data}) =>{
    return(
        <section className="container Proyects">
            <h2 className="Proyects_title glow_green">Proyectos</h2>
            <div className="Proyects_Container">
                {data.map((proyect,index )=> <CardProyect key={index} {...proyect} />)}
            </div>
        </section>
    )
}

export async function getStaticProps(){
    let url = process.env.API_URL+'/getProyects';
    const resp = await fetch(url);
    const proyects = await resp.json();

    return {
        props: {
          data: proyects.Proyects
        }, // will be passed to the page component as props
    }
  }

export default Proyects