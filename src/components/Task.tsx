import React from 'react'
import { TodoProps } from '../types/types'

const Task = (props: TodoProps) => {
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
}

export default Task