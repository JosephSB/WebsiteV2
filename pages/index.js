import Abilities from "@Components/Sections/Abilities";
import About from "@Components/Sections/About";
import Home from "@Components/Sections/Home";

const Inicio = ({data,language}) => {
  const {home,about,skills} = language;
  return (
    <div className="">
      <Home {...home} />
      <About {...about}/>
      <Abilities {...skills} data={data} />
    </div>
  );
};


export async function getServerSideProps({locale}){
  let url = process.env.API_URL+'/getSkills';
  const resp = await fetch(url);
  const skills = await resp.json();
  
  const language = await import(`../Lang/${locale}.json`)

  return {
      props: {
        data: skills.Skills,
        language: language.default.inicio 
      }, // will be passed to the page component as props
  }
}

export default Inicio;
