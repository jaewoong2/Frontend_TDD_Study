import { Item } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';

type Props = {
  lists: string[];
  handleDelete: (index: number) => void;
};

function Lists({ lists, handleDelete }: Props) {
  return (
    <Container data-testid="toDoList">
      {lists.map((list, i) => (
        <Item
          key={`${list + i}`}
          backgroundColor="#FF1744"
          hoverColor="#F01440"
          onClick={() => handleDelete(i)}
          buttonName="Delete">
          {list}
        </Item>
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
