import styled from 'styled-components';

export const Button = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px 12px;
  border-radius: 50%;
  color: #fff;
  fill: #00bcd5;
  cursor: pointer;
  border: 2px solid #00bcd5;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #00bcd5;
    fill: #fff;
  }

  &.isActive {
    background-color: #00bcd5;
    fill: #fff;
  }
`;
