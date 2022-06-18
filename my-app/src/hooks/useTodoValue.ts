import { useContext } from 'react';
import { TodoValueContext } from 'context/TodoProvider';

export default () => {
  const values = useContext(TodoValueContext);
  if (values === undefined) {
    throw new Error('useCounterValue should be used within CounterProvider');
  }
  return values;
};
