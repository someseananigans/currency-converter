import styled from 'styled-components'


export const Main = styled.div`
  height: 300px;
  width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
`

export const Input = styled.input`
  height: 40px;
  width: 250px;
  border-radius: 5px;
  border: 1px #7a7a7a solid;
  padding: 0 10px;
  font-weight: 700;
    &:focus {
    border: 1px #00ff55 solid;
      outline: none;
  }
  transition: .2s all ease-in-out;
  background: none !important;
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

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  position: relative;
  margin: 10px;
`

export const SelectWrapper = styled.div`
  overflow-y: scroll;
  max-height: 400px;
  position: absolute;
  top: 50px;
  background: white;
  padding: 5px;
  border-radius: 10px;
  transition: .3s all ease-in-out;
  opacity: ${({ show }) => show ? 1 : 0};
  transform: ${({ show }) => show ? 'translateY(0) ' : 'translateY(5px) '};
`

export const SearchItem = styled.li`
  display: flex;
  height: 50px; 
  width: 100%;
  align-items: center;
  &:hover {
    background: gray;
  }

`

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  position: relative;
  margin: 10px;
`

export const Display = styled.div`
  display: flex;
  height:100%; 
  width: 100%;
  border-radius: 5px;
  border: 1px #7a7a7a solid;
  padding: 0 10px;
  align-items: center;
  transition: .2s all ease-in-out;

  opacity: ${({ transition }) => transition ? 0 : 1};
`




export const Option = styled.p`
  margin-left: 5px;
  font-weight: 500;
`




