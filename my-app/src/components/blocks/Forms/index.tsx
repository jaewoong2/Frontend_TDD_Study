import { useCallback } from 'react';
import { Button, Input, InputContainer } from 'components/atoms';
import useChange from 'hooks/useChange';
import { useNavigate } from 'react-router-dom';

type Props = {
  addTodo: (todo: string) => void;
  placeHolder?: string;
};

export function Forms({ addTodo, placeHolder }: Props) {
  const [todo, updateTodo, onChangeTodo] = useChange('');
  const navigate = useNavigate();

  const handleTodo = useCallback(() => {
    addTodo(todo);
    updateTodo('');
    navigate('/');
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
