import "./style.css";
import {useState} from 'react';


export default function Task({ID, textTask="",isPacked = false, onClickButtonDelete}) {
    const [packed, setPacked] = useState(isPacked);
    const [inputTextState, setInputTextState] = useState(true);
    const [text, setText] = useState(textTask);
    const [textButton, setTextButton] = useState("Change");
    const [taskID, setTaskID] = useState(ID);

    function handleClickButtonChange(){
        if (inputTextState) {
            setTextButton("Save");
        } else {
            setTextButton("Change");
        }
        setInputTextState(!inputTextState);
    }

    return (
        <tr className="component-task">
            <td><input type="checkbox" className="task-checkbox" checked={packed} onChange={(event) => setPacked(event.target.checked)} /></td>
            <td>{!inputTextState? (<input type="text" value={text} className="task-input default-height" disabled={inputTextState} onChange={(event) => setText(event.target.value)} />) : (<span className="task-span"> {text} </span>)}</td>
            <td><button className="task-button default-height" onClick={handleClickButtonChange}>{textButton}</button>
            <button className="task-button default-height" onClick={() => onClickButtonDelete(taskID)}>Delete</button></td>
        </tr>
    )
}