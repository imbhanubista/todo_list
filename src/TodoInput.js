import {useEffect, useState} from 'react'
import DeleteCompo from './DeleteCompo'
const TodoInput =()=>{

    const [input, setInput] = useState("")
    const [list, setList] = useState([])

//for edit button to store index
const [editIndex, setEditIndex] = useState(0)
//is data is truly editng or ?
const [isEditing,setIsEditing] = useState(false)
    //Local Storage bata data liyeko
    useEffect(()=>{
        let localItem = localStorage.getItem("todoListWithUseEffect")
        if(localItem!==null){
            setList(JSON.parse(localItem))
            
        }
    },[])

    //data local storage ma pathayeko or store gareko
    useEffect(()=>{
        
        localStorage.setItem("todoListWithUseEffect",JSON.stringify(list))
    },[list])

    const inputHandler = (v)=>{
        setInput(v.target.value)
    }
    const buttonHandler=(e)=>{
        e.preventDefault()
        if(input.trim()===""){
            return;
        }

        const todoItem = {text:input.trim(),isCompleted:false,id:Math.random() * 100000}
        // const currentList = [...list, input.trim()];
        // setList(currentList);
        setList([...list,todoItem])
        setInput("");
// yo chai data local storage ma set garya ho 
        // localStorage.setItem("todolist",JSON.stringify(currentList));
        // todo vaneko auta key value matra ho 
    }
    const deleteHandler=(e)=>{
        const currentList=[...list]
        currentList.splice(e,1);
        setList(currentList)
        // let localData= localStorage.getItem("todolist")
        //string order ma vayeko data lai Array order ma leuxa parse le
        // localData= JSON.parse(localData)
        // localData.splice(e,1)
        // localStorage.setItem("todolist", JSON.stringify(localData))
    }

    const handleComplete = (id)=>{
        const newList = list.map((item)=>{
            if(item.id === id){
                return {...item,isCompleted:!item.isCompleted}
                //here isCompleted checks whether your todo list is completed or not.
            }
            return item
        });

        setList(newList)
    }
    
const editHandler=(index)=>{
    let currentData = list[index]
    setInput(currentData.text)
    // console.log(currentData)
    setEditIndex(index)
    setIsEditing(true)
}
const updateHandler = (e)=>{
    e.preventDefault()
    const currentData = [...list]
    currentData[editIndex] = {...currentData[editIndex],text : input}
    setList(currentData)
    setIsEditing(false)
    setInput("")
}


    return(
        <>
        <div className="main-div">
            {/* <div className="center-div">  */}
            <h1>Todo List</h1>
    <br />
            <form>
            <input type="text" placeholder="Add your items" value={input} id="inputfield" onChange={inputHandler}  />
{
            isEditing? <button className='inputAdd' onClick={updateHandler}>Update</button>:
            <button onClick={buttonHandler} className="inputAdd" > + </button>
            
}
        </form>
        
       {list.map((data,index)=>{
           return(
              
          <div key={index}>
                <DeleteCompo data={data}
            index={index}
            deleteHandler={deleteHandler}
            handleComplete ={handleComplete}
            editHandler = {editHandler}
            />
            </div>
            
            
               
           )
       })}
       
            </div>
            
         {/* </div> */}
        </>
    )
}
export default TodoInput;