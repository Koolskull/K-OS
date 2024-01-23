import type { ReactNode } from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.fieldset`
  display: flex;
  border: 1px solid #fff;
  box-shadow: rgb(128, 128, 128) 0 0 0 1.5px;
  padding: 0.5rem 1.5rem 1rem 1.5rem;

  > legend {
    font-size: 0.75rem;
  }
`

export default function ExplorerWrapper({
  style,
  title,
  children,
}: {
  style: object
  title: string
  children: ReactNode
}) {
  return (
    <Wrapper style={style}>
      <legend style={{ backgroundColor: '#a9a3c9' }}>{title}</legend>
      {children}
    </Wrapper>
  )
}
