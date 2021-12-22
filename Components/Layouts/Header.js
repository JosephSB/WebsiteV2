import { useRef } from "react"
import BtnBarrResponsive from "../Buttons/BtnBarrResponsive";
import BtnTheme from "../Buttons/BtnTheme"
import Link1 from "../Links/Link"


const Header = () =>{
    const nav = useRef(null);

    return (
        <header className="Header">
            <div className="ContainerHeader">
                <div className="Header_ContainerLogo">
                    <p className="Header_Logo">&lt;JosephSB/&gt;</p>
                    <BtnBarrResponsive content={nav}/>
                </div>
                <nav className="Header_Nav" ref={nav}>
                    <ul className="Header_Menu">
                        <Link1 Name="Inicio" Route="/" />
                        <Link1 Name="Proyectos" Route="/Proyects" />
                        <Link1 Name="Contacto" Route="/Contact" />
                        <BtnTheme/>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header