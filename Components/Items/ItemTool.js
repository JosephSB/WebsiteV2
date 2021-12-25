
const ItemTool = ({icon,name}) =>{
    return(
        <div className="ContentTool">
            <i className ={`${icon} icon`}></i>
            <span className="SpanTool">{name}</span>
        </div>
    )
}

export default ItemTool