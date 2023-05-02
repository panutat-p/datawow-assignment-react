import styled from 'styled-components'

import Button from './components/Button.tsx'

function App() {
  return (
    <Container>
      <div>
        <Button>Click me!</Button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default App
