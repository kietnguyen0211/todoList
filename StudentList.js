import Student from "./Student"
import { useState } from "react"
import FormAdd from "./FormAdd"
import Footer from "./Footer"
const { v4: uuidv4 } = require('uuid')

const getList = (stuList, flag) => {
    if (flag == "fillAll") {
        return stuList
    }
    else if (flag == "fillNoChecked") {
        return stuList.filter((value) => !value.isComplete)
    }
    else if (flag == "fillChecked") {
        return stuList.filter((value) => value.isComplete)
    }
    else {
        return stuList
    }
}


export default function StudentList() {


    const vd = [
        {
            id: 1,
            name: "Nguyen Van A",
            isComplete: false,
        },
        {
            id: 2,
            name: "Nguyen Van B",
            isComplete: false,
        },
    ]



    const [list, setList] = useState(() => {
        let newList;
        if (localStorage.getItem("list")) {
            newList = JSON.parse(localStorage.getItem("list"));
        }
        else {
            newList = vd;
        }
        return newList;
    })




    const addList = (textName) => {
        let newList;
        newList = [...list,
        {
            id: uuidv4(),
            name: textName,
            isComplete: false,
        }]
        localStorage.setItem("list", JSON.stringify(newList));
        setList(newList)
    }

    const toggleDelete = (id) => {
        let newList;
        newList = list.filter((stu) => stu.id !== id);
        localStorage.setItem("list", JSON.stringify(newList));
        setList(newList);
    }


    const [editId, setEditId] = useState("");
    console.log(editId);

    const toggleEdit = (id) => {
        setEditId(id);
    }

    const editList = (id, name) => {
        let newList;
        newList = list.map((value) =>
            value.id === id
                ? (
                    { ...value, name, isComplete: false }
                )
                : value
        )
        localStorage.setItem("list", JSON.stringify(newList));
        setEditId("");
        setList(newList);
    }


    const toggleComplete = (id) => {
        setList(list.map((value) => value.id === id
            ? { ...value, isComplete: true }
            : value
        ))
    }

    const [flag, setFlag] = useState("filterAll");

    const fillAll = () => {
        setFlag("fillAll")
    }

    const fillNoChecked = () => {
        setFlag("fillNoChecked")
    }

    const fillChecked = () => {
        setFlag("fillChecked")
        console.log("meo")
    }
    
    const removeChecked = () => {
        const newList = list.filter((value)=>!value.isComplete)
        setList(newList);
        console.log("meo")
    }

    return (
        <div>
            <FormAdd addList={addList} />
            {
                getList(list,flag).map((value, key) => {
                    return (
                        <Student
                            student={value}
                            key={key}
                            toggleDelete={toggleDelete}
                            editId={editId}
                            toggleEdit={toggleEdit}
                            editList={editList}
                            toggleComplete={toggleComplete}
                        />
                    )
                })
            }
            <Footer
                fillAll={fillAll}
                fillNoChecked={fillNoChecked}
                fillChecked={fillChecked}
                removeChecked={removeChecked}
            />
        </div>
    )
}