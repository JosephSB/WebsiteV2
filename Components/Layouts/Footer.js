import Link2 from "../Links/Link2"

const Footer = () =>{
    return (
        <footer className="Footer">
            <div className="Footer_Content">
                <nav>
                    <ul className="Footer_NavLink">
                        <Link2 icon='fa-linkedin-in' Route="https://www.linkedin.com/in/joseph-silva-bendezu-2882a5211/"/>
                        <Link2 icon='fa-github' Route="https://github.com/JosephSB"/>
                        <Link2 icon='fa-twitter' Route="https://twitter.com/ChinoxGamerYT"/>
                    </ul>
                </nav>
                <div className="Footer_Creditos">
                    <p className="Footer_Text">©2022 Joseph Silva Bendezu. All Rights Reserved.</p>
                    <p className="Footer_Text"> Made with ❤️ by JosephSB</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer