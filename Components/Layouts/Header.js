import { useRef } from "react"
import BtnBarrResponsive from "../buttons/BtnBarrResponsive";
import BtnTheme from "../buttons/BtnTheme"
import Link1 from "../links/Link"
import { useRouter } from 'next/router';


const Header = () =>{
    const nav = useRef(null);
    const router = useRouter();

    return (
        <header className="Header">
            <div className="ContainerHeader">
                <div className="Header_ContainerLogo">
                    <p className="Header_Logo">&lt;JosephSB/&gt;</p>
                    <BtnBarrResponsive content={nav}/>
                </div>
                <nav className="Header_Nav" ref={nav}>
                    <ul className="Header_Menu">
                        <Link1 Name="Inicio" Route="/" active={router.pathname === "/" ? "active" : ""}/>
                        <Link1 Name="Proyectos" Route="/Proyects" active={router.pathname === "/Proyects" ? "active" : ""} />
                        <Link1 Name="Contacto" Route="/Contact" active={router.pathname === "/Contact" ? "active" : ""}/>
                        <BtnTheme/>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header