import ItemTool from "./ItemTool"

const ContentListTool = ({name,frameworks}) =>{
    return(
        <li className="CardSkill_List">
            <p className="CardSkill_Title">{name}</p>
            <div className="CardSkill_Frameworks">
                {frameworks.map(
                    (fw,index) => 
                    fw.icon.length >0 
                        ? <ItemTool key={index} {...fw} />
                        : <p key={index} className="CardSkill_SpanIcon">{fw.name}</p>
                )}
            </div>
        </li>
    )
}

export default ContentListTool