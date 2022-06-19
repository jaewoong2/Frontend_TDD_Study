import Lists from 'components/blocks/Lists';
import useTodoValue from 'hooks/useTodoValue';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function List() {
  const todoLists = useTodoValue();

  return (
    <Container>
      <Lists lists={todoLists} />
      <AddButton to="/add">+</AddButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const AddButton = styled(Link)`
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  bottom: -30px;
  border-radius: 30%;
  cursor: pointer;
  background-color: #304ffe;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  &:hover {
    background-color: #1e40ff;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
