import Btn1 from "@Components/Buttons/Btn1";
import BtnBack from "@Components/Buttons/BtnBack";
import Grilla from "@Components/Grid/Grilla";
import ItemTool from "@Components/Items/ItemTool";

const ProyectDetailById = ({ results }) => {
  const { portadas, name, tags, description, Repositorio, Demo, technologies } =
    results;
  return (
    <div className="container ProyectDetail">
      <Grilla portadas={portadas} name={name} />
      <div className="ProyectDetail_Info">
        <BtnBack />
        <h2 className="ProyectDetail_tittle">{name}</h2>
        <ul className="CardProyect_MenuTags">
          {tags.map((tag, index) => (
            <li key={index} className="CardProyect_tag">
              {tag}
            </li>
          ))}
        </ul>
        <p className="ProyectDetail_description">{description}</p>
        <div className="CardProyect_Links">
          {Repositorio.length > 0 && (
            <Btn1
              icon={`svg/github.svg`}
              message="Repositorio"
              route={Repositorio}
            />
          )}
          {Demo.length > 0 && (
            <Btn1 icon={`svg/link.svg`} message="Demo" route={Demo} />
          )}
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
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const ID = params.id.toLowerCase();
  let url = process.env.API_URL + `api/proyects/${ID}`;
  const response = await fetch(url);
  const { results } = await response.json();

  return { props: { results } };
};

export const getStaticPaths = async () => {
  let url = process.env.API_URL + "api/proyects";
  const response = await fetch(url);
  const { results } = await response.json();

  const paths = results.map(({ id }) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
};

export default ProyectDetailById;
