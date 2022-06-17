import { Button } from 'components/atoms';
import { Label } from 'components/atoms/Label';
import React from 'react';
import styled from 'styled-components';

type Props = {
  lists: string[];
  handleDelete: (index: number) => void;
};

function Lists({ lists, handleDelete }: Props) {
  return (
    <Container>
      {lists.map((list, i) => (
        <ItemContainer key={`${list + i}`}>
          <Label>{list ?? 'hi'}</Label>
          <Button
            onClick={() => handleDelete(i)}
            hoverColor="#F01440"
            backgroundColor="#FF1744">
            Delete
          </Button>
        </ItemContainer>
      ))}
    </Container>
  );
}

export default Lists;

const Container = styled.ul`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

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
