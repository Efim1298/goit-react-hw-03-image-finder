import styled from 'styled-components';

export const SearchForm = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0 20px 0;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 999;
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 30px;
  padding: 5px 5px 5px 5px;
  font-size: 16px;
  outline: none;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &::placeholder {
    font-size: 16px;
  }

  &:hover::placeholder,
  &:focus::placeholder {
    color: #cccccc;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: grey;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: white;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
