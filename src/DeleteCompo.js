import './styles/input.css'
const DeleteCompo=(props)=>{
    return(

        <p class = {props.data.isCompleted?"strike":""}> 
        <input type="checkbox" 
        id="checkbox" 
        onChange={()=>props.handleComplete(props.data.id)} 
        checked={props.data.isCompleted}/>
            {props.data.text} <span className="deletebutton" onClick={()=>props.deleteHandler(props.index)}>X</span></p> 
    )
}
export default DeleteCompo;