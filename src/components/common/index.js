import styled, { css } from 'styled-components'
import { Field, Form } from 'formik'
import Col from 'react-bootstrap/Col'

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: var(--gray-7);
  background-color: var(--gray-1);
  border-radius: 4px;
  padding: 2px 8px;
  ::placeholder {
    color: var(--gray-6);
  }
`

export const Button = styled.button`
  border: none;
  background-color: ${props => (!props.secondary ? 'var(--blue-1)' : 'var(--gray-1)')};
  color: ${props => (!props.secondary ? 'var(--white)' : 'inherit')};
  padding: 4px 16px;
  border-radius: 4px;
  transition: 0.2s;
  :hover {
    background-color: ${props => (!props.secondary ? 'var(--blue-2)' : 'var(--gray-3)')};
  }
`

export const SmallText = styled.p`
  margin: 0;
  font-size: small;
  color: var(--gray-5);
`

export const TextButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  color: var(--blue-1);
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const ErrorText = styled.p`
  margin: 0;
  color: var(--red);
  font-weight: bolder;
`

export const BoldText = styled.h4`
  font-weight: 700;
  font-size: large;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`

export const LightText = styled.h5`
  font-weight: 300;
  font-size: large;
  padding: 6px;
  border-radius: 4px;
  margin-bottom: 8px;
  padding-left: 34px;
  color: var(--gray-6);
  cursor: pointer;
  ${props =>
    props.selected &&
    css`
      background-color: var(--white);
      color: var(--blue-1);
      font-weight: 600;
    `};
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--gray-3);
`

export const ButtonCircle = styled(Button)`
  background-color: transparent;
  border-radius: 50%;
  color: var(--black);
  width: 32px;
  height: 32px;
  padding: 0;
  :hover {
    background-color: var(--gray-3);
  }
  :disabled {
    color: var(--gray-4);
  }
  :disabled:hover {
    background-color: initial;
  }
`

export const CustomInput = styled(Field)`
  align-self: stretch;
  background-color: transparent;
  border: none;
  color: var(--gray-7);
  background-color: var(--gray-1);
  border-radius: 4px;
  padding: 2px 8px;
  ::placeholder {
    color: var(--gray-6);
  }
`

export const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  @media (min-width: 992px) {
    width: 30vw;
  }
`

export const CustomButton = styled(Button)`
  font-size: large;
  display: Flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 15vw;
`

export const AuthColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30vh;
`

export const Outer = styled.div`
  height: ${props => props.height}px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
`

export const Inner = styled.div`
  width: ${props => props.current}%;
  background-color: ${props => props.color};
  height: ${props => props.height}px;
`

export const Wrapper = styled.div`
  border-radius: 4px;
  position: fixed;
  background-color: #6bf178cc;
  color: ${props => props.color};
  border-bottom: 4px solid ${props => props.color};
  padding: 16px 32px;
  font-weight: bold;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  @media (min-width: 576px) {
    width: 50vw;
  }
`

export const AlertCustomButton = styled(Button)`
  background-color: #289f3b;
  padding: 1px;
  color: var(--white);
  :hover {
    background-color: inherit;
    color: var(--white);
  }
`

export const AdminScreenWrapper = styled.div`
  background-color: var(--white);
`

export const TotalCardWrapper = styled.div`
  background-color: ${props => props.color};
  padding: 20px 16px;
  border-radius: 4px;
  width: 75%;
  color: var(--white);
  font-size: large;
  margin-bottom: 32px;
  background-image: linear-gradient(to right top, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3));
`

export const SidebarWrapper = styled.div`
  background-color: var(--gray-1);
  min-height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
`

export const SmallSidebarWrapper = styled.div`
  background-color: var(--gray-1);
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 10000;
  display: flex;
  flex-direction: column;
`

export const ExitButton = styled.button`
  color: white;
  background-color: var(--red-1);
  border: none;
  margin-top: auto;
  border-radius: 4px;
  padding: 8px 16px;
  text-align: center;
  transition: 0.2s;
  :hover {
    background-color: var(--red-2);
    color: white;
  }
`

export const RowItem = styled.div`
  border-bottom: 2px solid var(--gray-1);
  padding: 16px 24px;
  display: flex;
`

export const GrayText = styled.p`
  margin: 0;
  color: var(--gray-5);
  flex-basis: 15%;
  flex-shrink: 0;
  white-space: nowrap;
`

export const ModalFieldCustomInput = styled(Field)`
  flex-grow: 1;
  transition: 0.2s;
  background-color: transparent;
  border: none;
  color: var(--gray-7);
  background-color: var(--gray-1);
  border-radius: 4px;
  padding: 2px 8px;
  margin-left: 4px;
  width: 100px;
  ::placeholder {
    color: var(--gray-6);
  }
  :focus {
    background-color: var(--gray-2);
  }
`

export const EditModalWrapper = styled.div`
  display: flex;
  margin: 32px;
`

export const UserCard = styled.div`
  border-radius: 16px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`

export const UserListWrapper = styled.div``

export const ListWrapper = styled.div`
  flex-grow: 1;
`

export const UserDetailWrapper = styled.div`
  height: 100vh;
  display: flex;
`

export const UserDetailUserCard = styled.div`
  border-radius: 16px 0 0 16px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const ResourceListWrapper = styled.div`
  height: 100vh;
`

export const ResourceListListWrapper = styled.div`
  flex-grow: 1;
`

export const ResourceDetailWrapper = styled.div`
  height: 100vh;
  padding: 32px 0;
  display: flex;
`

export const ResourceDetailUserCard = styled.div`
  border-radius: 16px 0 0 16px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color}33;
`

export const ResourceDetailRowItem = styled.div`
  border-bottom: 2px solid var(--gray-1);
  padding: 16px 24px;
  display: flex;
`

export const ResourceDetailGrayText = styled.p`
  margin: 0;
  color: var(--gray-5);
  flex-basis: 30%;
  flex-shrink: 0;
`

export const ColorName = styled(BoldText)`
  background-color: ${props => props.color}88;
  border-radius: 4px;
`

export const ElementWrapper = styled.div`
  display: flex;
`

export const ElementRowItem = styled.p`
  margin: 0;
  flex-basis: 31%;
  white-space: nowrap;
`

export const CustomRowItem = styled(ElementRowItem)`
  padding: 5px;
`

export const InfoRow = styled.div`
  border-bottom: 2px solid var(--gray-1);
  display: flex;
  padding: 16px 16px;
  flex-grow: 1;
  :hover {
    background-color: var(--gray-1);
  }
`

export const AvatarWrapper = styled.div`
  width: 48px;
  display: flex;
  align-items: center;
`

export const RowActions = styled.div`
  flex-basis: 8%;
  display: flex;
  justify-content: space-between;
`

export const InfoRowHeading = styled(InfoRow)`
  color: var(--gray-5);
  :hover {
    background-color: initial;
  }
`

export const DetailRow = styled.div`
  border-bottom: 2px solid var(--gray-1);
  padding: 16px 24px;
  display: flex;
`

export const CustomRowInfo = styled(InfoRow)`
  :hover {
    background-color: ${props => props.color}88;
  }
`

export const ResourceHeadingWrapper = styled(InfoRowHeading)`
  flex-grow: 0;
`
