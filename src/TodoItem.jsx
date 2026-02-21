import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ToDoItem = ({ id, name, isComplete, onToggle, onDelete }) => {
    return (
            <li>
                <label>
                    <input
                        type="checkbox"
                        checked={isComplete}
                        onChange={() => onToggle(id)}
                    />{" "}
                    {name}
                </label>
                <button 
                    type="button" 
                    className="ml-2 text-gray-500 hover:text-gray-700" 
                    aria-label="Delete task" 
                    onClick={() => onDelete(id)} 
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </li>
    )
}
