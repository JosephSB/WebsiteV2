import Image from "next/image"

const About = () =>{
    return(
        <section className="About">
            <figure className="About_Img">
                <Image      
                src="/Img/FotSetup.png"
                alt="JosephSB"
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL="/Img/FotSetup.png"
                />
            </figure>
            <div className="About_Info">
                <p className="About_Tittle glow_green">Acerda de mi</p>
                <p className="About_text">
                    Hola, mi nombre es <strong>Joseph Nahun Silva Bendezu</strong>, tengo 19 años y vivo en Lima-Peru.
                </p>
                <br/>
                <p className="About_text">
                    Me gusta todo lo relacionado con tecnologia e infomatica. Por esa razón, estudio Ingeniería de Software 
                    🎓. 
                </p>
                <br/>
                <p className="About_text">
                    A inicios del 2020 comence la carrera de Ing de Software, donde decidi especializarme en Desarrollo Web, empece 
                    a aprender viendo videos en youtube y despues aprendi por udemy, documentacion oficial y otras plataformas de educacion.
                    Me gusta practicar y aplicar lo aprendido haciendo proyectos, donde la mayoria los subo a mi &nbsp;
                    <a href="https://github.com/JosephSB" target="_blank" className="About_Link"><strong>github</strong></a>.
                </p>
                <br/>
                <p className="About_text">
                    Por ahora lo que mas domino es el lado Frontend, principalmente javascript con React.js y Next.js.
                </p>
            </div>
        </section>
    )
}

export default About