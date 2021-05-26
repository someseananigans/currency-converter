import { useEffect } from 'react'
import Context from '../utils/Context'
import styled from 'styled-components'
import Card from '../components/Card/Card'

const Home = () => {

  const {
    getExchange,
    inputChange,
    convert,
    rates, setRates,
    input, setInput,
    exchange, setExchange,
    isLoading, setLoading
  } = Context()

  useEffect(() => {
    // getExchange()
    // setTimeout(() => {

    //   console.log(rates)
    // }, 1000);
  }, [input])


  return (
    <>
      <Container>
        <Card />
      </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: #a9ffa9;
`