import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";
import {useState} from "react";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'May 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'May 6th at 6:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'May 5th at 12:30pm',
            reminder: false
        }
        ])

    const getHighestCurrentTaskId = ()=>{
        return tasks.reduce((prev, curr) => (curr.id > prev.id)? curr: prev).id + 1
    }

    const [nextId, setNextId] = useState(getHighestCurrentTaskId())

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task)=>{
            return task.id !== id;
        }))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id){
                return {...task, reminder: !task.reminder}
            }
            return task
        }))
    }

    // Add Tasks
    const addTask = (task) => {
        const id = nextId
        const newTask = {...task, id}
        setTasks([...tasks, newTask])
        setNextId(id+1) // next value
    }


    return (
    <div className="container">
        <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ("No To Do Tasks")}
    </div>
    );
}

export default App;
