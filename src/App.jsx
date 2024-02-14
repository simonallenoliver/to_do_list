import { useState } from 'react'
import './App.css'
import ToDoDisplay from './components/ToDoDisplay'
import ToDoForm from './components/ToDoForm'

function App() {

  const [toDo, setToDo] = useState([]);

  const [textDec, setTextDec] = useState("none")


  
  const updateToDo = (newToDo) => {
    setToDo((prevToDo) => [...prevToDo, newToDo])
  }


  const deleteToDo = (idFromBelow) =>{
    let filteredToDo = toDo.filter((singleToDo)=>singleToDo.id !== idFromBelow);
    setToDo(filteredToDo);
  }

  const strikeToDo = (idFromBelow) =>{
  setToDo(prevToDo =>prevToDo.map((p) => {
    if(p.id == idFromBelow){
        const pcopy = structuredClone(p)
        pcopy.completed = !pcopy.completed
        return pcopy
    }
    return p
}))
  }



  return (
    <>
    {JSON.stringify(toDo)}
  <ToDoForm updateToDo = {updateToDo} textDec={textDec}/>
  <ToDoDisplay toDo = {toDo} deleteToDo = {deleteToDo} strikeToDo = {strikeToDo}/>
    </>
  )
}

export default App
