import React from 'react';
import { Button, Input, InputContainer } from 'components/atoms';

type Props = {
  handleAddTodo: () => void;
  todo: string;
  onChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Forms({ handleAddTodo, todo, onChangeTodo }: Props) {
  return (
    <InputContainer>
      <Input
        value={todo}
        onChange={onChangeTodo}
        placeholder="할 일을 입력 해주세요"
      />
      <Button
        backgroundColor="#304ffe"
        hoverColor="#1e40ff"
        onClick={handleAddTodo}>
        + ADD
      </Button>
    </InputContainer>
  );
}
