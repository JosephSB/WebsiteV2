import Link2 from "../Links/Link2";

const AsideRedes = () =>{
    return(
        <div className="Aside-Redes">
            <ul className="Aside-Menu">
                <Link2 icon='fa-linkedin-in' Route="https://www.linkedin.com/in/joseph-silva-bendezu-2882a5211/"/>
                <Link2 icon='fa-github' Route="https://github.com/JosephSB"/>
                <Link2 icon='fa-twitter' Route="https://twitter.com/ChinoxGamerYT"/>
            </ul>
        </div>
    )
}

export default AsideRedes