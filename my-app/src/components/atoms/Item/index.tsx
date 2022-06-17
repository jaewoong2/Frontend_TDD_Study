import styled from 'styled-components';
import React from 'react';
import { Label } from '../Label';
import { Button } from '../Button';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  hoverColor?: string;
  backgroundColor?: string;
  buttonName?: string;
};

function Item({
  children,
  onClick,
  hoverColor,
  backgroundColor,
  buttonName,
}: Props) {
  return (
    <ItemContainer>
      <Label>{children}</Label>
      <Button
        onClick={onClick}
        hoverColor={hoverColor}
        backgroundColor={backgroundColor}>
        {buttonName}
      </Button>
    </ItemContainer>
  );
}

export { Item };

Item.defaultProps = {
  onClick: () => {
    console.log('onClick Button');
  },
  hoverColor: '',
  buttonName: '',
  backgroundColor: '',
};

const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  margin: 10px;
  padding: 10px;

  label {
    flex: 1;
    color: black;
  }
`;
