import { useState } from "react";
import { nanoid } from "nanoid";
import { ToDoItem } from "./TodoItem";
import { AddTaskForm } from "./AddTaskForm";
import { Modal } from "./Modal";

const INITIAL_TASK_LIST = [
    { id: "todo-0", name: "Eat", isComplete: true },
    { id: "todo-1", name: "Sleep", isComplete: false },
    { id: "todo-2", name: "Repeat", isComplete: false },
];

function App() {
    const [taskList, setTaskList] = useState(INITIAL_TASK_LIST);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    function addTask(name) {
        const trimmedName = name?.trim();
        const taskName = trimmedName && trimmedName.length > 0 ? trimmedName : "New Task";
        const newTask = { id: nanoid(), name: taskName, isComplete: false };
        setTaskList((prevTaskList) => [...prevTaskList, newTask]);
        setIsAddModalOpen(false);
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = taskList.map((task) => {
            if (id === task.id) {
                return { ...task, isComplete: !task.isComplete };
            }
            return task;
        });
        setTaskList(updatedTasks);
    }

    function deleteTask(id) {
        const updatedTasks = taskList.filter((task) => task.id !== id);
        setTaskList(updatedTasks);
    }

    return (
	<main className="m-4"> 
            <button
                className="rounded-lg bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 active:bg-blue-700"
                onClick={() => setIsAddModalOpen(true)}
            >
                Add Task
            </button>
            <Modal
                headerLabel="New Task"
                isOpen={isAddModalOpen}
                onCloseRequested={() => setIsAddModalOpen(false)}
            >
                <AddTaskForm onNewTask={addTask} />
            </Modal>
            <section>
                <h1 className="text-xl font-bold">To do</h1>
                    <ul>
                    {taskList.map((task) => (
                            <ToDoItem
                                key={task.id}
                                id={task.id}
                                name={task.name}
                                isComplete={task.isComplete}
                                onToggle={toggleTaskCompleted}
                                onDelete={deleteTask}
                            />
                    ))}
                    </ul>
            </section>
        </main>
    );
}

export default App;
