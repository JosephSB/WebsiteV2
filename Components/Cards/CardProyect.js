import Image from "next/image"
import ItemTool from "../Items/ItemTool"
import Btn1 from "../Buttons/Btn1"

const CardProyect = ({portada,name,tags,description,Repositorio,Demo,technologies}) =>{
    return(
        <div className="CardProyect">
            <Image
            crossOrigin="anonymous"
            src={portada}
            alt="MiniSpotiffy"
            width={280}
            height={140}
            placeholder="blur"
            blurDataURL={portada}
            />
            <div className="CardProyect_Content">
                <h3 className="CardProyect_Tittle">{name}</h3>
                <ul className="CardProyect_MenuTags">
                    {tags.map((tag,index) => <li key={index} className="CardProyect_tag">{tag}</li> )}
                </ul>
                <p className="CardProyect_description">
                    {description}
                </p>
            </div>
            <div className="CardProyect_Links">
                {Repositorio.length > 0 && <Btn1 icon="svg/github.svg" message="Repositorio" route={Repositorio} />}
                {Demo.length > 0 && <Btn1 icon="svg/link.svg" message="Demo" route={Demo} />}
            </div>
            <div className="CardProyect_footer">
                {technologies.map(
                    (item,index) => 
                    item.icon.length >0 
                        ? <ItemTool key={index} {...item} />
                        : <p key={index} className="CardSkill_SpanIcon">{item.name}</p>
                )}
            </div>
        </div>
    )
}

export default CardProyect