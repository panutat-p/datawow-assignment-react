import { useState } from 'react'
import styled from 'styled-components'

import Todo from './Todo'
import { InitialState } from '../redux/initial-state.ts'
import { TaskType } from '../types/task.type.ts'

function TodoList() {
  const [tasks, setTasks] = useState<TaskType[]>(InitialState)

  const completeTodo = (index: number) => {
    const newTasks = [...tasks]
    console.log('completeTodo, index:', index)
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  return (
    <Container>
      <Header>Tasks</Header>
      {tasks.map((task, index) => (
        <Todo
          id={task.id}
          key={index}
          text={task.title}
          complete={task.completed}
          onComplete={() => completeTodo(index)}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Header = styled.h1`
  font-size: 36px;
  color: #4f4c4c;
  margin-bottom: 20px;
`

export default TodoList
