import { useEffect } from 'react'
import { Main, InputWrapper, SelectWrapper, Wrapper, Input, SelectContainer, SearchItem, Option, Display, DisplayWrapper, SectionContainer, ConvertButton, ButtonWrapper, Switch, CurrencyDisplay, RatesContainer, RatesHeader, Result, Label, Rates, RateArrow, RatesWrapper } from './Card.elements'
import Context from '../../utils/Context'
import { ArrowSwap } from '@styled-icons/fluentui-system-filled/'
const Card = () => {

  const {
    input, inputChange,
    sOptions,
    setInput, handleClickSearchItem,
    convert, getExchange, exchange,
    ref, isVisible, transition, setTransition, handleHideDrop, handleShowDrop, handleClickOutside, results
  } = Context()


  useEffect(() => {
    getExchange()
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  function numberWithCommas(n) {
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
  }

  const handleClickAmount = () => {
    handleHideDrop()
    setTransition({ ...transition, amount: true })
  }

  useEffect(() => {
    // console.log(isVisible)
  }, [isVisible])

  return (
    <>
      <div style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'column', height: '555px' }}>
        <Main>
          <Wrapper>

            <InputWrapper ref={ref}>
              <SectionContainer>
                <Label highlight={transition.amount}>Amount</Label>
                <form onSubmit={convert}>
                  <Input
                    type={'Number'}
                    name={'amount'}
                    placeholder={'AMOUNT'}
                    value={input.amount}
                    onChange={inputChange}
                    onClick={handleClickAmount}
                  />
                </form>
              </SectionContainer>

              <SectionContainer>

                <Label highlight={transition.fromSearch}>From</Label>
                <DisplayWrapper>
                  <Display id={'fromDisplay'} transition={transition.fromSearch}>
                    <p style={{ fontWeight: 600 }}>
                      {input.fromDisplay.slice(3)}&nbsp;
                    </p>
                    <CurrencyDisplay>
                      {/* {input.fromDisplay.slice(4)} */}
                    </CurrencyDisplay>
                  </Display>
                  <SelectContainer >
                    <Input
                      // onSubmit
                      autocomplete="off"
                      onClick={handleShowDrop}
                      onChange={inputChange}
                      value={input.fromSearch}
                      name={'fromSearch'}
                      placeholder={''}
                      onFocus={(event) => {
                        setTimeout(() => {
                          event.target.placeholder = 'FROM'
                        }, 200);
                      }}
                      onBlur={({ target }) => {
                        target.placeholder = ''
                        setInput({ ...input, fromSearch: '' })
                      }}
                    />
                    {isVisible.fromSearch &&
                      <SelectWrapper show={transition.fromSearch} visible={isVisible.fromSearch}>
                        <ul>
                          {sOptions.fromSearch.map((option, index) =>
                            <SearchItem
                              key={index + 1}
                              onClick={() => handleClickSearchItem('from', 'fromDisplay', option)}
                            >
                              <Option>{option.key.slice(3)} - {option.name}</Option>
                            </SearchItem>
                          )}
                        </ul>
                      </SelectWrapper>
                    }
                  </SelectContainer>
                </DisplayWrapper>
              </SectionContainer>

              <Switch>
                <ArrowSwap />
              </Switch>

              <SectionContainer>
                <Label highlight={transition.toSearch}>To</Label>
                <DisplayWrapper>
                  <Display id={'toDisplay'} transition={transition.toSearch}>
                    <p style={{ fontWeight: 600 }}>
                      {input.toDisplay.slice(3)}&nbsp;
                    </p>
                    <CurrencyDisplay>
                      {/* {input.toDisplay.slice(4)} */}
                    </CurrencyDisplay>
                  </Display>
                  <SelectContainer >
                    <Input
                      // onSubmit
                      autocomplete="off"
                      onClick={handleShowDrop}
                      onChange={inputChange}
                      value={input.toSearch.slice}
                      name={'toSearch'}
                      placeholder={''}
                      onFocus={(event) => {
                        setTimeout(() => {
                          event.target.placeholder = 'TO'
                        }, 200);
                      }}
                      onBlur={({ target }) => {
                        target.placeholder = ''
                        setInput({ ...input, toSearch: '' })
                      }}
                    />
                    {isVisible.toSearch &&
                      <SelectWrapper show={transition.toSearch}>
                        <ul>
                          {sOptions.toSearch.map((option, index) =>
                            <SearchItem
                              key={index + 1}
                              onClick={() => handleClickSearchItem('to', 'toDisplay', option)}
                            >
                              <Option>{option.key.slice(3)} - {option.name}</Option>
                            </SearchItem>
                          )}
                        </ul>
                      </SelectWrapper>
                    }
                  </SelectContainer>
                </DisplayWrapper>
              </SectionContainer>
            </InputWrapper>

            <ButtonWrapper>
              <ConvertButton id="convert" onClick={convert}>CONVERT</ConvertButton>

            </ButtonWrapper>

          </Wrapper>

        </Main>

        {results.reveal &&
          <Result id='results' transition={results.transition}>

            <RatesContainer>
              <RatesHeader>
                <h3>RATE ({input.from.slice(3)})</h3>
              </RatesHeader>
              <RatesWrapper>

                <Rates top={true}>1 {input.fromDisplay.slice(6)} </Rates>
                <div style={{ display: 'flex' }}>
                  <RateArrow />
                  <Rates>{exchange.xRate.toFixed(5)} {input.to.slice(3)} </Rates>
                </div>

              </RatesWrapper>
            </RatesContainer>
            <RatesContainer>
              <RatesHeader>
                <h3>RATE ({input.to.slice(3)})</h3>
              </RatesHeader>
              <RatesWrapper>

                <Rates top={true}>1 {input.toDisplay.slice(6)} </Rates>
                <div style={{ display: 'flex' }}>
                  <RateArrow />
                  <Rates>{(1 / exchange.xRate).toFixed(5)} {input.from.slice(3)} </Rates>
                </div>
              </RatesWrapper>
            </RatesContainer>
            <RatesContainer>
              <RatesHeader>
                <h3>CONVERSION TOTAL</h3>
              </RatesHeader>
              <RatesWrapper>
                <Rates top={true}>{numberWithCommas(parseFloat(input.amount))} {input.from.slice(3)}(s) </Rates>
                <div style={{ display: 'flex' }}>
                  <RateArrow />
                  <Rates>{numberWithCommas(parseFloat(exchange.total).toFixed(5))} {input.to.slice(3)}</Rates>
                </div>
              </RatesWrapper>
            </RatesContainer>


          </Result>
        }
      </div>
    </>
  )
}

export default Card
