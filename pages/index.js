import Abilities from "../Components/Sections/abilities";
import About from "../Components/Sections/About";
import Home from "../Components/Sections/Home";

const Inicio = ({data}) => {
  return (
    <div className="">
      <Home/>
      <About/>
      <Abilities data={data} />
    </div>
  );
};

export async function getStaticProps(){
  let url = process.env.API_URL+'/getSkills';
  const resp = await fetch(url);
  const skills = await resp.json();

  return {
      props: {
        data: skills.Skills
      }, // will be passed to the page component as props
  }
}

export default Inicio;
