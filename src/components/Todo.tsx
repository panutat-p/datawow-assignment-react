import styled from 'styled-components'

interface TodoProps {
  id: string
  text: string
  complete: boolean
  onComplete: () => void
}

function Todo({ id, text, complete, onComplete }: TodoProps) {
  return (
    <Container>
      <Checkbox type="checkbox" id={id} checked={complete} onChange={onComplete} />
      <span>{text}</span>
    </Container>
  )
}

// <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
// <label htmlFor="vehicle1"> I have a bike</label>

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Checkbox = styled.input`
  margin-right: 10px;
`

export default Todo
