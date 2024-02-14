import React, { useState } from 'react'

const ToDoForm = (props) => {


    const {updateToDo} = props;
    const [toDo, setToDo] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        // setToDo((prevToDo) => [...ToDo, color]) ---this was moved to app.jsx for lifted state
        updateToDo(
            {
                toDo: toDo,
                completed: false,
                id: crypto.randomUUID()
            }
        )
        // double binding
        setToDo("");

        
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
                    <div className='inputContainer'>
                        <label htmlFor="toDo">Enter a toDo: </label>
                        <input
                            type="text"
                            name='toDo'
                            // double binding
                            value = {toDo}
                            onChange={(e) => setToDo(e.target.value)}
                        />
                        

                        <button>button</button>
                    </div>
                </form>
    </div>
  )
}

export default ToDoForm