import { useState, useEffect, useRef } from 'react'
import { Main, Select, Wrapper, SelectWrapper, Input, SelectContainer, SearchItem, Option, Display, DisplayContainer, AmountContainer } from './Card.elements'
import { options, name } from '../../utils/Data'
import Context from '../../utils/Context'

const Card = () => {

  const {
    input, inputChange,
    sOptions, setSOptions,
    setInput, handleClickSearchItem,
    ref, isVisible, setVisible, transition, setTransition, handleHideDrop, handleShowDrop, handleClickOutside,
  } = Context()




  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <>
      <Main>
        <Wrapper ref={ref}>
          <AmountContainer>
            <Input type={'Number'} placeholder={'AMOUNT'} />
          </AmountContainer>


          <DisplayContainer>
            <Display id={'fromDisplay'} transition={transition.fromSearch}>
              <p style={{ fontWeight: 600 }}>{input.fromDisplay.slice(0, 3)}&nbsp;</p>
              <p>{input.fromDisplay.slice(4)}</p>
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
          </DisplayContainer>

          {/* <SelectContainer >
            <Input
              autocomplete="false"
              onClick={handleShowDrop}
              onChange={inputChange}
              value={input.toSearch}
              name={'toSearch'}
              placeholder={'TO'} />
            {isVisible.toSearch &&
              <SelectWrapper show={transition.toSearch}>
                <ul>
                  {sOptions.toSearch.map((option, index) =>
                    <li key={index + 1} >
                      <SearchItem>
                        <Option>{option.key} - {option.name}</Option>
                      </SearchItem>
                    </li >
                  )}
                </ul>
              </SelectWrapper>
            }
          </SelectContainer> */}

        </Wrapper>
      </Main>
    </>
  )
}

export default Card
