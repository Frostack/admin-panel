import styled from 'styled-components';

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
`;

export const Button = styled.button`
  border: none;
  background-color: var(--blue);
  color: var(--white);
  padding: 4px 16px;
  border-radius: 4px;
`;

export const SmallText = styled.p`
  margin: 0;
  font-size: small;
  color: var(--gray-5);
`;

export const TextButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  color: var(--blue);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: var(--red);
  font-weight: bolder;
`;

export const AlertModal = styled.div`
  border-radius: 4px;
  position: fixed;
  width: 50vw;
  background-color: #c4f9c9;
  color: #204824;
  padding: 16px 32px;
  font-weight: bold;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);
`;
