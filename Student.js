import { RiDeleteBack2Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import FormEdit from './FormEdit';
export default function Student(props) {
    let isEdit = props.editId === props.student.id;
    return (
        <div>
            {
                isEdit
                    ? (
                        <FormEdit
                            student={props.student}
                            editList={props.editList}
                        />
                    )
                    : (
                        <>
                            <input type="checkbox"
                                checked={props.student.isComplete ? true : false}
                                onChange={()=>props.toggleComplete(props.student.id)}
                            ></input>
                            <h1>{props.student.name}</h1>
                            <div className="Icons">
                                <RiDeleteBack2Line onClick={() =>
                                    props.toggleDelete(props.student.id)
                                }
                                />
                                <FiEdit2 onClick={() =>
                                    props.toggleEdit(props.student.id)
                                }
                                />
                            </div>
                        </>
                    )
            }
        </div>
    )
}