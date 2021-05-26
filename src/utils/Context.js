import { useState } from 'react'


const Context = () => {

  const [isLoading, setLoading] = useState(false)
  // base rate is EUR
  const [rates, setRates] = useState({})
  const [input, setInput] = useState({
    from: 'USD',
    to: 'EUR',
    amount: 1
  })

  const [exchange, setExchange] = useState({
    xRate: 0,
    total: 0
  })


  const inputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }


  const getExchange = () => {
    const api_key = '0f58f1f6b6fb0c4480a85f64283d3da8'
    const options = {
      method: 'GET',
      // headers: { "Content-Type": "application/json" }
    }

    fetch(`http://data.fixer.io/api/latest?access_key=${api_key}`, options)
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(err => console.log(err))
  }

  const convert = () => {
    // first convert to 1 of from
    // start is 1 eu
    // 1 eu = x of from
    // 1 / x of from == multiplier(switch from eu)
    // x of from * rate of to == exchange
    // exchange * multiplier * amount

    let multiplier = 1 / rates[input.from]
    let exchange = rates[input.from] * rates[input.to]
    let exchangeTotal = multiplier * exchange * rates[input.amount]
    let oneFrom = multiplier * exchange

    setExchange({ ...exchange, xRate: oneFrom, total: exchangeTotal })
  }



  return {
    getExchange,
    inputChange,
    convert,
    rates, setRates,
    input, setInput,
    exchange, setExchange,
    isLoading, setLoading,

  }


}

export default Context