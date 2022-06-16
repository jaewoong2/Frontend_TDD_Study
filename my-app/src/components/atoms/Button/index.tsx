import React from 'react';
import styled from 'styled-components';
import { Label } from '../Label';

type Props = React.DetailsHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children }, ref) => {
    return (
      <Btn ref={ref}>
        <Label>{children}</Label>
      </Btn>
    );
  },
);

Button.displayName = 'Button';

const Btn = styled.button`
  outline: none;
  border: none;
  text-align: center;
  background-color: #304ffe;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1e40ff;
  }
  &:active {
    box-shadow: inset 5px 5px 10px #00000033;
  }
`;
