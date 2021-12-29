import IconSvg from "./IconSvg"

const ItemTool = ({icon,name}) =>{
    return(
        <div className="ContentTool">
            <IconSvg src={icon}/>
            <span className="SpanTool">{name}</span>
        </div>
    )
}

export default ItemTool