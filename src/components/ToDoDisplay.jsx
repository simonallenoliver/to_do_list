import React, { useState } from 'react'

const ToDoDisplay = (props) => {
    const { toDo, deleteToDo, strikeToDo, textDec } = props



    return (
        <div className='boxDisplay'>
            <h1>My ToDo List</h1>
            {
                toDo.map((singleToDo, index) => (

                    <div className='listofstuff' key={index}>
                        <div style = {{textDecoration: singleToDo.completed?"line-through":"none"}}>{singleToDo.toDo} </div>
                        <input type='checkbox' onChange={() => strikeToDo(singleToDo.id)} />
                        <div><button className='deleteBox' onClick={() => deleteToDo(singleToDo.id)}>x</button></div>
                        <div>
                            

                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default ToDoDisplay