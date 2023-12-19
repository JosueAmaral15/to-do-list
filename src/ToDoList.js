import "./style.css";
import ButtonAdd from "./ButtonAdd.js";
import {useState} from 'react';
import Task from './Task.js';

export default function ToDoList ({tasks}) {
    const [toDoList, setToDoList] = useState(tasks);

    function handleClickButtonAdd(){
        setToDoList(
            toDoList.concat(
                {id: toDoList.length, text:"edit this new task...", packed: false}
            )
        );
        //console.log(toDoList);
    }

    function handleClickButtonDelete(taskId){
        setToDoList(
            toDoList.filter((element)=>{
                if(element.id !== taskId)
                    return element;
            })
        );
    }
    
    const tasks_return = toDoList.map((element) => {
        return <Task key={element.id} isPacked={element.packed} ID={element.id} textTask={element.text} onClickButtonDelete={handleClickButtonDelete} />
    });
    

    return (
        <div className="task-panel">
            <div className="to-do-list">
                <table>
                    <tbody>
                        {tasks_return}
                    </tbody>
                </table>
            </div>
            <ButtonAdd onClickAdd={handleClickButtonAdd}>Add</ButtonAdd>
        </div>
    );
}