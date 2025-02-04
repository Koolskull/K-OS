import styled from 'styled-components/macro'

const MBox = styled.div<{ alternative?: boolean }>`
  text-align: center;
  border: 1px solid green;
  background-color: ${({ theme, alternative }) => (alternative ? theme.bgGreen : theme.white)};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin:1rem;
  `}
`

const Bar = styled.div`
  background: #333333;
  color: white;
  font-family: Courier;
`

const MiyaOsBar = styled.div<{ grabbing?: boolean }>`
  background: #a3a3a3;
  color: white;
  font-family: Courier;
  padding: 4px 2px;
  user-select: none;
  cursor: grab;
`

const BoxContent = styled.div`
  padding: 0.5rem;
`

const BorderContainer = styled.div`
  border: 1px solid white;
  padding: 1rem;
  font-style: italic;
  text-align: center;
`

export { Bar, BorderContainer, BoxContent, MBox, MiyaOsBar }
