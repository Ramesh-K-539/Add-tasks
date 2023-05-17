import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px;
`
export const Form = styled.form`
  height: 100vh;
  width: 35%;
  background-color: #131213;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 70px;
  padding-right: 70px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: 600;
  font-family: 'roboto';
`
export const Label = styled.label`
  color: #f1f5f9;
  font-size: 22px;
  font-weight: 500;
  font-family: 'roboto';
  align-self: flex-start;
  margin-top: ${props => props.margin}px;
  margin-bottom: 15px;
`
export const Input = styled.input`
  height: 38px;
  width: 97%;
  color: #64748b;
  font-size: 15px;
  align-self: flex-start;
  padding: 10px;
`

export const Select = styled.select`
  height: 38px;
  width: 97%;
  align-self: flex-start;
  padding: 9px;
`
export const Option = styled.option`
  color: #000000;
  font-size: 18px;
  font-weight: 400;
  padding: 10px;
`
export const AddButton = styled.button`
  height: 40px;
  width: 130px;
  border: none;
  border-radius: 7px;
  background-color: #f3aa4e;
  color: #ffffff;
  font-size: 17px;
  font-weight: 400;
  margin-top: 35px;
  margin-left: 0px;
  cursor: pointer;
  outline: none;
`
export const TasksContainer = styled.div`
  height: 100vh;
  width: 65%;
  background-color: #000000;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 40px;
  padding-right: 40px;
`
export const TagsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Tags = styled.li`
  list-style-type: none;
  margin-left: 0px;
  margin-right: 20px;
`

export const TasksLists = styled.ul`
  height: 65vh;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-y: scroll;
`

export const Tasks = styled.li`
  list-style-type: none;
  margin-left: 0px;
  margin-right: 20px;
  margin-bottom: 30px;
  background-color: #1a171d;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`

export const TagButton = styled.button`
  height: 37px;
  min-width: 99px;
  border: 1px solid #f8f8f8;
  border-radius: 12px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${props => props.bgColor};
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  font-family: 'roboto';
  cursor: pointer;
  outline: none;
`

export const Cont = styled.div`
  height: 37px;
  min-width: 99px;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #f3aa4e;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Paragraph = styled.p`
  color: #000000;
  font-size: 17px;
  font-weight: 500;
  font-family: 'roboto';
`
export const NotFound = styled.p`
  text-align: center;
  margin-top: 150px;
  margin-left: 40px;
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
  font-family: 'roboto';
`
export const T = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: 600;
  font-family: 'roboto';
`
