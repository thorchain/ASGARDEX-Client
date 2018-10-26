import styled from 'styled-components'

export const Input = styled.input`
  flex: 1 0 50px;
  padding: 6px 6px;
  outline: none;
  background: #323C46;
  color: #fff;
  border: 1px solid #3B4753;
  border-radius: 5px;
  width: ${p => p.width || 400}px;
  margin-right: 20px;
  margin-bottom: 5px;
`
