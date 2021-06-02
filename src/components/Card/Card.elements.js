import styled from 'styled-components'


export const Label = styled.h4`
  transition: all .2s ease-in-out;
  color: ${({ highlight }) => highlight ? '#7ccfff' : '#464646'};
`

export const Main = styled.div`
  height: fit-content;
  background: #ffffff;
  display: flex;
  /* align-items: center; */
  padding: 30px;
  justify-content: center;
  border-radius: 10px;
  width: 900px;
  box-shadow: 2px 2px 15px -5px #000000;
`

export const Result = styled.div`
  height: 300px;
  /* background: #ffffff; */
  display: flex;
  /* padding: 30px; */
  justify-content: space-between;
  /* border-radius: 10px; */
  width: 900px;
  /* box-shadow: 2px 2px 15px -5px #000000; */
  top: 220px;
  transition: .3s all ease-in-out;
  opacity: ${({ transition }) => transition ? 1 : 0};
  transform: ${({ transition }) => transition ? 'translateY(0) ' : 'translateY(50px) '};
  position: absolute;
`

export const InputWrapper = styled.div`
  display: flex; 
  width: 100%;
  align-items: center;
  `

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  `

// export const ResultsWrapper = styled.div`
//   display: flex;


//   width: 100%;
//   `

export const SelectWrapper = styled.div`
  overflow-y: scroll;
  max-height: 400px;
  position: absolute;
  top: 50px;
  background: #fafafa;
  padding: 5px;
  border-radius: 5px;
  transition: .3s all ease-in-out;
  opacity: ${({ show }) => show ? 1 : 0};
  transform: ${({ show }) => show ? 'translateY(0) ' : 'translateY(5px) '};
  z-index: 1;
  `

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 15px 0 0 0;
  padding: 0 7px;
  `


export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  position: relative;
  margin: 0 6px;
  &:hover ${Label} {
    color: #7ccfff;
  }
  `


export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  position: relative;
  position: absolute;
  top: 0;
  left: 0;
  `

export const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 45px;
  padding: 0 15px;
  position: relative;
  justify-content: center;
  `

export const SearchItem = styled.li`
  display: flex;
  height: 50px; 
  width: 100%;
  cursor: pointer;
  align-items: center;
  &:hover {
    background: gray;
  }
  
  `

export const Display = styled.div`
  display: flex;
  width: 100%;
  /* border-radius: 5px;
  border: 1px #7a7a7a solid; */
  
  align-items: center;
  white-space: nowrap;
  transition: .2s all ease-in-out;
  opacity: ${({ transition }) => transition ? 0 : 1};
`

export const CurrencyDisplay = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`


export const Input = styled.input`
  height: 45px;
  width: 250px;
  border-radius: 5px;
  border: 1px #c5c5c5 solid;
  padding: 0 15px;
  font-weight: 700;

  &:focus {
    border: 1px #00ff55 solid;
    outline: none;
    cursor: text !important;
  }
  &:hover {
    cursor: pointer;
  }
  transition: .2s all ease-in-out;
  background: none !important;
`

export const Option = styled.p`
  margin-left: 10px;
  font-weight: 500;
`


export const ConvertButton = styled.button`
  height: 45px;
  width: 100%;
  font-weight: 800;
  border-radius: 5px;
  border: none;
  background: #c7ffb1;
  color: #424242;
  align-self: center;
  cursor: pointer;
  transition: all .3s ease-in-out;
  border: 1px solid transparent;
  &:hover {
    background: #aeecff;
    color: #424242;
    border: 1px solid gray;
    
  }
`

export const Switch = styled.div`
  width: 40px;
  border: 1px solid #c5c5c5;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  color: #57ff57;
  
  margin: 21px 7px 0 7px;
  &:hover {
    color: white;
    background: #383838;
  }
`

export const RatesContainer = styled.div`
  width: 49%;
  display: flex;
  /* margin: 7px; */
  flex-direction: column;
  box-shadow: 2px 2px 15px -5px #000000;
  border-radius: 10px;
  background: white;
`

export const RatesHeader = styled.div`
  width: 100%;
  height: 55px;
  color: #292929;
  background: #c7ffb1;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

