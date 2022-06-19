import { Item } from 'components/atoms';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  lists: string[];
};

function Lists({ lists }: Props) {
  const navigate = useNavigate();

  const handleClickItem = useCallback((index: number) => {
    navigate(`/detail/${index}`);
  }, []);

  return (
    <Container data-testid="toDoList">
      {lists.map((list, i) => (
        <Item
          key={`${list + i}`}
          backgroundColor="#d9d9d9"
          hoverColor="#d9d9d9"
          onClick={() => handleClickItem(i)}
          buttonName="Move to Item">
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
