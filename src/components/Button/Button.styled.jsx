import styled from 'styled-components';

export const ButtonLoad = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
