import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: React.ReactNode
}

function Button({ children }: ButtonProps) {
  function handleClick() {
    console.log('button clicked')
  }

  return <StyledButton onClick={handleClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  background-color: #2f4bdc;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3e8e41;
  }
`

export default Button
