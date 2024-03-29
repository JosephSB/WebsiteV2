import Image from "next/image";
import ItemTool from "../Items/ItemTool";
import Btn1_SPA from "@Components/Buttons/Btn1_SPA";
import Link from "next/link";

const CardProyect = ({
  portadas,
  name,
  tags,
  description,
  technologies,
  id,
}) => {
  return (
    <Link href={`/Proyects/${id}`}>
      <a>
        <div className="CardProyect">
          <img
            crossOrigin="anonymous"
            src={portadas[0]}
            alt={name}
            width={280}
            height={140}
          />
          <div className="CardProyect_Content">
            <h3 className="CardProyect_Tittle">{name}</h3>
            <ul className="CardProyect_MenuTags">
              {tags.map((tag, index) => (
                <li key={index} className="CardProyect_tag">
                  {tag}
                </li>
              ))}
            </ul>
            <p className="CardProyect_description">{description}</p>
          </div>
          <div className="CardProyect_footer">
            {technologies.map((item, index) =>
              item.icon.length > 0 ? (
                <ItemTool key={index} {...item} />
              ) : (
                <p key={index} className="CardSkill_SpanIcon">
                  {item.name}
                </p>
              )
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

/*
                {Repositorio.length > 0 && <Btn1 icon="svg/github.svg" message="Repositorio" route={Repositorio} />}
                {Demo.length > 0 && <Btn1 icon="svg/link.svg" message="Demo" route={Demo} />}*/

export default CardProyect;
