import BannerImage from 'assets/banner.jpg?preset=banner&resize=true'
import Love from 'assets/love.jpg?preset=avatar&resize=true'
import Miya from 'assets/miya.png?preset=avatar&resize=true'
import MiyaG from 'assets/miyagod.jpg?preset=avatar&resize=true'
import styled from 'styled-components/macro'

import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Logo from '@/components/Header/Logo'
import About from '@/components/Home/About'
import ApprovedCollections from '@/components/Home/ApprovedCollections'
import Hero from '@/components/Home/Hero'
import MiladyBox from '@/components/Home/MiladyBox'
import License from '@/components/License'
import { Bar, BorderContainer, MBox } from '@/theme/common'

const Bg = styled.div`
  height: calc(100% - 26px);
  overflow: hidden;
`
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 100%;
  > div {
    width: 100%;
    max-width: 42rem;
  }
`

const Container = styled.div`
  padding: 1rem 3rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding: 1rem;
  `}
`

const TextWrapper = styled.div`
  padding: 0.5rem;
  p {
    text-align: justify;
    margin-left: 0.5rem;
  }
`

const Explanation = styled.div`
  padding: 1rem;
`
const Caption = styled.p<{ color?: string }>`
  color: ${({ color }) => color || 'inherit'};
  margin-top: 1rem;
`

const ImageContainer = styled.div`
  padding: 2rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default function Home() {
  return (
    <Bg>
      <AppContainer>
        <Banner>
          KOOLSKULL - A THRASH CREATION BY THE LORD THY GOD THROUGH HIS DEDICATED HUMAN SERVANT VESSEL JUAN MANUEL
          LARRAZABAL SINCE 2007
        </Banner>
      </AppContainer>
    </Bg>
  )
}
