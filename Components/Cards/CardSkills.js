import ContentListTool from "../items/ContentListTool"

const CardSkills = ({name,tools}) =>{
    return(
        <div className="CardSkill">
            <div className="CardSkill_Header">
                <p className="CardSkill_Title">{name}</p>
                <i className="fas fa-angle-down fa-2x"></i>
            </div>
            <ul className="CardSkill_MenuLists">
                {tools.map((tool, index) => <ContentListTool key={index} {...tool} /> )}
            </ul>
        </div>
    )
}

export default CardSkills