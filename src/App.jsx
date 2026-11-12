import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Task from './components/Task'
import axios from 'axios'

export default function App() {
  const [tasks, setTask] = useState([])
  const getTasks = () => {
    axios.get('http://localhost:8000/task')
    .then(({data}) => setTask(data))
    .catch((e) => console.log(e))
  }

  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div>
      <Form getTasks={getTasks} />
      <Task tasks={tasks} getTasks={getTasks}/>
      <ToastContainer theme='dark'/>
    </div>
  )
}
