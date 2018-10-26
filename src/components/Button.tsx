import styled from 'styled-components'

export const Button = styled<{ height?: number, fontSize?: number }, 'button'>('button')`
  height: ${p => p.height ? p.height : 35}px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #1c2731;
  border: solid 2px #4e6376;
  font-family: "Exo 2";
  font-size: ${p => p.fontSize ? p.fontSize : 20}px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  padding: 1px 14px 2px;
  outline: none;
`

export const SmallButton = Button.extend`
  height: 25px;
  font-size: 12px;
  margin: 4px 0;
`
