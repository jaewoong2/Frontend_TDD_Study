import React, { createContext, useEffect, useMemo, useState } from 'react';

const initalAction = {
  addList: () => (todo: string) => {},
  removeList: (index: number) => {},
};

export const TodoActionsContext = createContext(initalAction);
export const TodoValueContext = createContext<string[]>([]);

type Props = {
  children?: React.ReactNode;
};

export function TodoProvider({ children }: Props) {
  const { addStroage, getStorage, removeStroage } = utils;
  const [todoLists, setTodoLists] = useState<string[]>(getStorage());

  const actions = useMemo(
    () => ({
      addList: () => (todo: string) => {
        if (todo.trim() !== '') {
          setTodoLists((prev) => [...prev, todo]);
          addStroage(todo);
        }
      },
      removeList: (index: number) =>
        setTodoLists((prev) => {
          removeStroage(index);
          return [...prev].filter((_, i) => i !== index);
        }),
    }),
    [],
  );

  return (
    <TodoActionsContext.Provider value={actions}>
      <TodoValueContext.Provider value={todoLists}>
        {children}
      </TodoValueContext.Provider>
    </TodoActionsContext.Provider>
  );
}

const utils = {
  getStorage: () => {
    const data = localStorage.getItem('todoItem');
    if (data !== null) {
      const todolists = JSON.parse(data);
      if (todolists) {
        return todolists;
      }
      return [];
    }
    return [];
  },

  addStroage: (item: string) => {
    const data = utils.getStorage();
    const lists = [...data, item];
    localStorage.setItem('todoItem', JSON.stringify(lists));
  },

  removeStroage: (index: number) => {
    const data = utils.getStorage();
    const lists = [...data].filter((_, i) => i !== index);
    localStorage.setItem('todoItem', JSON.stringify(lists));
  },
};
