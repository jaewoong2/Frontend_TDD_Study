import React from 'react';
import styled from 'styled-components';
import { Label } from '../Label';

type Props = {
  backgroundColor?: string;
  hoverColor?: string;
} & React.DetailsHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ backgroundColor, hoverColor, children, onClick }, ref) => {
    return (
      <Btn
        backgroundColor={backgroundColor}
        onClick={onClick}
        hoverColor={hoverColor}
        ref={ref}>
        <Label>{children}</Label>
      </Btn>
    );
  },
);

Button.displayName = 'Button';
Button.defaultProps = {
  backgroundColor: '#304FFE',
  hoverColor: '#1E40FF',
};

const Btn = styled.button<Props>`
  outline: none;
  border: none;
  text-align: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px #00000033;
  }
`;
