import Image from "next/image"

const About = ({title,p1,p2,p3,p4}) =>{
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
                <h2 className="About_Tittle glow_green">{title} </h2>
                <p className="About_text">
                    {p1}
                </p>
                <br/>
                <p className="About_text">
                    {p2}
                </p>
                <br/>
                <p className="About_text">
                    {p3} &nbsp;
                    <a href="https://github.com/JosephSB" target="_blank" className="About_Link"><strong>github</strong></a>.
                </p>
                <br/>
                <p className="About_text">
                    {p4}
                </p>
            </div>
        </section>
    )
}

export default About