import ShadertoyReact from 'shadertoy-react'
import styled from 'styled-components/macro'
import { useEnsName } from 'wagmi'

import { useAccount } from '@/context/AccountProvider'
import { useWaves } from '@/store/experience/hooks'

// import { fs } from './webgl'
import { fs } from './webgl'
import { useClusterName } from '@/hooks/useClusterName'

const GradientBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  background-image: url('https://koolskull.com/screenglitch.gif');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  opacity: 0.15; /* Adjust this value to control the GIF opacity */
`

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  bottom: 0;
  padding: 1rem;
  margin-bottom: 30px;

  button {
    font-family: inherit;
  }
`

const BackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: #000000;
`

const OSInfo = styled.div`
  color: white;
  text-align: right;
`

export default function Background() {
  const { account, balance } = useAccount()
  const clusterName = useClusterName(account?.address)
  const ens = useEnsName({ address: account?.address })

  return (
    <BackgroundStyled>
      <ButtonContainer>
        <OSInfo>
          <p>K-OS</p>
          <p>Version 4.4.4</p>
          {account?.isConnected && (
            <>
              {clusterName ? <p>{clusterName}</p> : !!ens.data && <p>{ens.data}</p>}
              {balance && <p>{Number(balance.formatted).toFixed(3)} ETH</p>}
            </>
          )}
        </OSInfo>
      </ButtonContainer>
      <GradientBlock />
      {/* render the shader only if the user has enabled it */}
    </BackgroundStyled>
  )
}
