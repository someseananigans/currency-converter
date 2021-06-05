import { useEffect } from 'react'
import Context from '../utils/Context'
import styled from 'styled-components'
import Card from '../components/Card/Card'
import exchange from '../assets/exchange.svg'
import background from '../assets/background.jpg'
import background2 from '../assets/background2.jpg'
import background3 from '../assets/background3.jpg'

const Home = () => {

  return (
    <>
      <Main>
        <Header>Currency Exchange</Header>
        <Card />
      </Main>
    </>
  )
}

export default Home

const Main = styled.div`
  padding: 200px 100px;
  min-height: 100vh;
  height: 100%;
  background: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background3});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`
const Image = styled.img`
  width: 500px;
  margin: 20px;
`

const Header = styled.h1`
  font-size: 40px;
  color: white;
  text-shadow: 2px 2px 5px black;
  padding-bottom: 20px;
`