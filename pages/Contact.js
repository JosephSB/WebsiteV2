import Btn2 from "@Components/Buttons/Btn2"
import ItemContact from "@Components/Items/ItemContact"

const Contact = () =>{
    return(
        <section className="container Contact">
            <h2 className="Contact_Tittle glow_green">Contactame</h2>
            <div className="Contact_ContainerForm">
                <aside className="Contact_Aside">
                    <ItemContact icon="svg/whatsapp.svg" text="963 032 870" />
                    <ItemContact icon="svg/email.svg" text="jguku2002@gmail.com" />
                    <ItemContact icon="svg/location.svg" text="Lima-Peru" />
                </aside>
                <form className="Contact_Form">
                    <input type="text" className="Contact_inputForm" placeholder="Nombre: "/>
                    <input type="email" className="Contact_inputForm" placeholder="Email: "/>
                    <input type="phone" className="Contact_inputForm" placeholder="Celular: "/>
                    <textarea className="Contact_textAreaForm" placeholder="Mensaje: "/>
                    <Btn2 message="Enviar" icon="svg/send.svg"/>
                </form>
            </div>
        </section>
    )
}

export default Contact