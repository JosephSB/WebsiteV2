import CardSkills from "../Cards/CardSkills"

const Abilities = ({title,data}) =>{
    return(
        <section className="Abilities">
            <h2 className="Abilities_Title glow_green">{title}</h2>
            <div className="Abilities_ContentCards">
                {data.map((item,index) => <CardSkills key={index} {...item} />)}
            </div>
        </section>
    )
}

export default Abilities
