import axios from "axios"
import { toast } from "react-toastify"

export default function Task({tasks, getTasks}) {
    const deleteTask = (id) => {
        axios.delete(`http://localhost:8000/task/${id}`)
        .then(() => {
            getTasks()
            toast.error('Удалено')
        })
        .catch((e) => console.log(e))
    }
  return (
    <div style={{maxWidth: '800px', margin: '0 auto'}}>

      {
        tasks?.map((task) => (
          <div key={task.id} style={{
            border: `1px solid 
            ${task?.level === 'hard' ? 'red' 
            : task?.level === 'medium' ? 'yellow' 
            : 'green'
            }`, padding: '10px', margin: '10px'
            }}>
            <h2>{task.task}</h2>
            <button onClick={() => deleteTask(task.id)}>del</button>
          </div>
        ))
      }
    </div>
  )
}