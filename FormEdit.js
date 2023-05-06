import { useState } from "react";
export default function FormEdit(props){
    const [text,setText]=useState(props.student.name);
    const handleEdit = (e) => {
        e.preventDefault();
        props.editList(props.student.id, text)
    }
    return(
        <form onSubmit={handleEdit}>
            <input 
                type="text"
                value={text}
                placeholder="Enter Something"
                onChange={(e) => setText(e.target.value)}
            ></input>
        </form>
    )
}