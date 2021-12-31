import "./styles/input.css";
import { FaRegTrashAlt,FaRegEdit } from "react-icons/fa";
const DeleteCompo = (props) => {
  return (
    <p class={props.data.isCompleted ? "strike" : ""}>
     <span> <input
        type="checkbox"
        id="checkbox"
        onChange={() => props.handleComplete(props.data.id)}
        checked={props.data.isCompleted}
      /> </span>
      {props.data.text}{" "}
      <span
        className="deletebutton"
        onClick={() => props.deleteHandler(props.index)}
      >
        <FaRegTrashAlt />
      </span>
      <span onClick={()=>props.editHandler(props.index)}> <FaRegEdit/> </span>
    </p>
  );
};
export default DeleteCompo;
