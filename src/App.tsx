import styled from 'styled-components'

import TodoList from './components/TodoList.tsx'

function App() {
  return (
    <Background>
      <Card>
        <TodoList />
      </Card>
    </Background>
  )
}

const Background = styled.div`
  background-color: #e5e5e5;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Card = styled.div`
  background-color: #f5f5f5;
  width: 500px;
  height: 600px;
  padding: 16px;
  border-radius: 4px;
`

export default App
