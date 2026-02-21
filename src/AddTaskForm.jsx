
import { useState } from "react";

export function AddTaskForm({ onNewTask }) {
    const [taskName, setTaskName] = useState("");

    function handleChange(event) {
        setTaskName(event.target.value);
    }

    function handleAddClicked() {
        if (typeof onNewTask === "function") {
            onNewTask(taskName);
        }
        setTaskName("");
    }

    return (
        <div>
            <input
                className="border border-solid border-gray-300 rounded-lg p-2"
                placeholder="New task name"
                aria-label="New task name"
                value={taskName}
                onChange={handleChange}
            />
            <button
                className="bg-blue-500 text-white rounded-lg p-1 ml-1"
                onClick={handleAddClicked}
            >
                Add task
            </button>
        </div>
    );
}
