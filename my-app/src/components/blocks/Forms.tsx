import React from 'react';
import { Button, Input, InputContainer } from 'components/atoms';

type Props = {
  handleAddTodo: () => void;
  removeTodo: () => void;
  todo: string;
  onChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
};

export function Forms({
  handleAddTodo,
  todo,
  onChangeTodo,
  removeTodo,
  placeHolder,
}: Props) {
  return (
    <InputContainer data-testid="inputForm">
      <Input
        value={todo}
        onChange={onChangeTodo}
        placeholder={placeHolder ?? ''}
      />
      <Button
        backgroundColor="#304ffe"
        hoverColor="#1e40ff"
        onClick={() => {
          handleAddTodo();
          removeTodo();
        }}>
        + ADD
      </Button>
    </InputContainer>
  );
}
