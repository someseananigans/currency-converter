import React from 'react'
import { Main, Select, Wrapper, SelectWrapper, Input } from './Card.elements'
import { options } from '../../utils/Data'

const Card = () => {


  const RenderOptions = ({ type }) => {
    const optionsList = options.map((option, index) =>
      <option key={index + 1} value={option} > {option}</option >
    )
    return (
      <select>
        <option key={'start'} value={type == 'start' ? 'USD' : 'EUR'} >{type == 'start' ? 'USD' : 'EUR'}</option>
        {optionsList}
      </select>
    )
  }

  return (
    <>
      {console.log(options)}
      <Main>
        <Wrapper>
          <Input></Input>
          <SelectWrapper>
            <RenderOptions type={'start'} />
          </SelectWrapper>
          <SelectWrapper>
            <RenderOptions type={'end'} />
          </SelectWrapper>
        </Wrapper>
      </Main>
    </>
  )
}

export default Card
