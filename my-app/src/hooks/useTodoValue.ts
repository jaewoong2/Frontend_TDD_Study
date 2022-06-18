import { useContext } from 'react';
import { TodoValueContext } from 'context/TodoProvider';

export default () => {
  const values = useContext(TodoValueContext);
  if (values === undefined) {
    throw new Error('todoValueContext should be used within TodoProvider');
  }
  return values;
};
