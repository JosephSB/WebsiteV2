import Link2 from "../Links/Link2";

const AsideRedes = () =>{

    return(
        <div className="Aside-Redes">
            <ul className="Aside-Menu">
                <Link2 icon='svg/linked.svg' Route="https://www.linkedin.com/in/joseph-silva-bendezu-2882a5211/"/>
                <Link2 icon='svg/github.svg' Route="https://github.com/JosephSB"/>
                <Link2 icon='svg/twitter.svg' Route="https://twitter.com/ChinoxGamerYT"/>
            </ul>
        </div>
    )
}

export default AsideRedes