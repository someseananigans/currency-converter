import { useState, useEffect, useRef } from 'react'
import { Main, Select, InputWrapper, SelectWrapper, Wrapper, ResultsWrapper, Input, SelectContainer, SearchItem, Option, Display, DisplayWrapper, SectionContainer, ConvertButton, ButtonWrapper, Switch, CurrencyDisplay, RatesContainer, RatesHeader, Result, Label } from './Card.elements'
import { options, name } from '../../utils/Data'
import Context from '../../utils/Context'
import styled from 'styled-components'
import { ArrowLeftRight } from '@styled-icons/bootstrap/'
import { ArrowSwap } from '@styled-icons/fluentui-system-filled/'

const Card = () => {

  const {
    input, inputChange, rates,
    sOptions, setSOptions,
    setInput, handleClickSearchItem,
    convert, getExchange, exchange,
    ref, isVisible, setVisible, transition, setTransition, handleHideDrop, handleShowDrop, handleClickOutside, results
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

  return (
    <>
      <div style={{ position: 'relative', alignItems: 'center', display: 'flex', flexDirection: 'column', height: '555px' }}>
        <Main>
          <Wrapper>

            <InputWrapper ref={ref}>
              <SectionContainer>
                <Label highlight={input.amount}>Amount</Label>
                <form onSubmit={convert}>
                  <Input
                    type={'Number'}
                    name={'amount'}
                    placeholder={'AMOUNT'}
                    value={input.amount}
                    onChange={inputChange}
                    onClick={handleHideDrop}
                  />
                </form>
              </SectionContainer>

              <SectionContainer>

                <Label highlight={transition.fromSearch}>From</Label>
                <DisplayWrapper>
                  <Display id={'fromDisplay'} transition={transition.fromSearch}>
                    <p style={{ fontWeight: 600 }}>
                      {input.fromDisplay.slice(0, 3)}&nbsp;
                  </p>
                    <CurrencyDisplay>
                      {input.fromDisplay.slice(4)}
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
                      <SelectWrapper show={transition.fromSearch}>
                        <ul>
                          {sOptions.fromSearch.map((option, index) =>
                            <SearchItem
                              key={index + 1}
                              onClick={() => handleClickSearchItem('from', 'fromDisplay', option)}
                            >
                              <Option>{option.key} - {option.name}</Option>
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
                      {input.toDisplay.slice(0, 3)}&nbsp;
                  </p>
                    <CurrencyDisplay>
                      {input.toDisplay.slice(4)}
                    </CurrencyDisplay>
                  </Display>
                  <SelectContainer >
                    <Input
                      // onSubmit
                      autocomplete="off"
                      onClick={handleShowDrop}
                      onChange={inputChange}
                      value={input.toSearch}
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
                              <Option>{option.key} - {option.name}</Option>
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
              <ConvertButton onClick={convert}>CONVERT</ConvertButton>

            </ButtonWrapper>

          </Wrapper>

        </Main>

        {results.reveal &&
          <Result transition={results.transition}>

            <RatesContainer>
              <RatesHeader>
                <strong>RATE</strong>
              </RatesHeader>
              <p>1 {input.from} = </p>
              <p>{exchange.xRate.toFixed(5)} {input.to} </p>
              <p>1 {input.to} = </p>
              <p>{(1 / exchange.xRate).toFixed(5)} {input.from} </p>
            </RatesContainer>
            <RatesContainer>
              <RatesHeader>
                <strong>CONVERSION TOTAL</strong>
              </RatesHeader>
              <p>{numberWithCommas(parseFloat(input.amount))} {input.from} = </p>
              <p>{numberWithCommas(parseFloat(exchange.total).toFixed(5))} {input.to}</p>
            </RatesContainer>



          </Result>
        }
      </div>
    </>
  )
}

export default Card
