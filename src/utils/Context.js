import { useState, useRef } from 'react'
import { Display } from '../components/Card/Card.elements'
import { xValues } from '../utils/Data'


const Context = () => {

  const [isLoading, setLoading] = useState(false)
  // base rate is EUR
  const [rates, setRates] = useState({})
  const [input, setInput] = useState({
    // search input
    fromSearch: '',
    toSearch: '',
    // div display
    fromDisplay: 'USD - US Dollar',
    toDisplay: 'EUR - Euro',
    // convert function
    from: 'USD',
    to: 'EUR',
    amount: 1.00
  })

  const [sOptions, setSOptions] = useState({
    fromSearch: xValues,
    toSearch: xValues
  })

  const [exchange, setExchange] = useState({
    xRate: 0,
    total: 0
  })

  const ref = useRef(null);

  const [isVisible, setVisible] = useState({
    fromSearch: false,
    toSearch: false,
  });

  const [transition, setTransition] = useState({
    fromSearch: false,
    toSearch: false,
  })

  const [results, setResults] = useState({
    transition: false,
    reveal: false
  })


  const inputChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value })
    // change setSOptions based off of search
    relevantSearch(target.name, target.value)
    if (results.reveal) {
      setResults({ ...results, transition: false })
      setTimeout(() => {
        setResults({ ...results, reveal: false })
      }, 400);
    }
  }

  // const onEnter = () => {
  //   enterSearch()
  // }


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

  const convert = (event) => {
    event.preventDefault()
    // first convert to 1 of from
    // start is 1 eu
    // 1 eu = x of from
    // 1 / x of from == multiplier(switch from eu)
    // x of from * rate of to == exchange
    // exchange * multiplier * amount

    // change base
    let multiplier = 1 / rates[input.from]
    // one base = how many new currency
    let xChangeRate = rates[input.to] * multiplier
    // total accounting amount inputted
    let exchangeTotal = xChangeRate * input.amount

    setExchange({ ...exchange, xRate: xChangeRate, total: exchangeTotal })
    setResults({ transition: false, reveal: true })
    setTimeout(() => {
      setResults({ reveal: true, transition: true })
    }, 100);
  }




  const relevantSearch = (type, search) => {
    // want to push matching searches to array
    // remove them from original array 
    // totalResults.concat(array)
    let searchResults = []
    let searchResults2 = []

    searchResults = xValues.filter(item => item.key.includes(search.toUpperCase()))
    searchResults2 = xValues.filter(item => item.name.toUpperCase().includes(search.toUpperCase()))
    searchResults = searchResults.concat(searchResults2.filter(item => !searchResults.includes(item)))

    let filtered = xValues.filter(n => !searchResults.includes(n))

    setSOptions({ ...sOptions, [type]: searchResults.concat(filtered) })
    console.log(sOptions)
  }

  const enterSearch = ({ target }) => {
    // grab one search result and set searchResult
    // const formattedSearch = searchResult.key + '-' + searchResult.name
    // setInput({...input, [target.name]: formattedSearch })
  }

  const handleClickSearchItem = (value, display, option) => {
    setInput({ ...input, [value]: option.key, [display]: `${option.key + ' - ' + option.name}` })
    handleHideDrop()

    console.log(input)
  }







  const handleHideDrop = () => {
    setTransition({ ...transition, fromSearch: false, toSearch: false, amount: false })
    setTimeout(() => {
      setVisible({ ...isVisible, fromSearch: false, toSearch: false });
    }, 300);
  }

  const handleShowDrop = ({ target }) => {
    const otherTarget = target.name == 'fromSearch' ? 'fromSearch' : 'toSearch'
    setVisible({ ...isVisible, [target.name]: true })
    setTimeout(() => {
      setTransition({ results: transition.results, [otherTarget.name]: false, [target.name]: true })
    }, 100);

    setTransition({ ...transition, [otherTarget.name]: false })
    setTimeout(() => {
      setVisible({ results: isVisible.results, [target.name]: true, [otherTarget.name]: false })
    }, 500);
  }

  const handleClickOutside = ({ target }) => {
    if (ref.current && !ref.current.contains(target)) {
      handleHideDrop()
    }
  };





  return {
    getExchange,
    inputChange,
    convert,
    rates, setRates,
    input, setInput,
    exchange, setExchange,
    isLoading, setLoading,
    sOptions, setSOptions,
    handleClickSearchItem,

    ref, isVisible, setVisible, transition, setTransition, handleHideDrop, handleShowDrop, handleClickOutside,
    results
  }


}

export default Context