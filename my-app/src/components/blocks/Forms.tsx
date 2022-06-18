import React, { useCallback } from 'react';
import { Button, Input, InputContainer } from 'components/atoms';
import useChange from 'hooks/useChange';

type Props = {
  addTodo: (todo: string) => void;
  placeHolder?: string;
};

export function Forms({ addTodo, placeHolder }: Props) {
  const [todo, updateTodo, onChangeTodo] = useChange('');

  const handleTodo = useCallback(() => {
    addTodo(todo);
    updateTodo('');
  }, [todo, addTodo, updateTodo]);

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
        onClick={handleTodo}>
        + ADD
      </Button>
    </InputContainer>
  );
}
