import useChange from 'hooks/useChange';
import React, { createContext, useMemo, useState } from 'react';

const initalAction = {
  updateTodo: (_: string) => {},
  onChangeTodo: (_: React.ChangeEvent<HTMLInputElement>) => {},
  addList: () => {},
  removeList: (_: number) => {},
};

export const TodoActionsContext = createContext(initalAction);
export const TodoValueContext = createContext<{
  todoLists: string[];
  todo: string;
}>({
  todo: '',
  todoLists: [],
});

type Props = {
  children?: React.ReactNode;
};

export function TodoProvider({ children }: Props) {
  const [todo, updateTodo, onChangeTodo] = useChange('');
  const [todoLists, setTodoLists] = useState<string[]>([]);

  const actions = useMemo(
    () => ({
      updateTodo,
      onChangeTodo,
      addList: () => setTodoLists((prev) => [...prev, todo]),
      removeList: (index: number) =>
        setTodoLists((prev) => [...prev].filter((_, i) => i !== index)),
    }),
    [todo, onChangeTodo, updateTodo],
  );

  const values = useMemo(
    () => ({
      todo,
      todoLists,
    }),
    [todo, todoLists],
  );

  return (
    <TodoActionsContext.Provider value={actions}>
      <TodoValueContext.Provider value={values}>
        {children}
      </TodoValueContext.Provider>
    </TodoActionsContext.Provider>
  );
}
