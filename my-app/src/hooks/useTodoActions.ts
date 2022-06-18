import { TodoActionsContext } from 'context/TodoProvider';
import { useContext } from 'react';

export default () => {
  const actions = useContext(TodoActionsContext);
  if (actions === undefined) {
    throw new Error('useCounterValue should be used within CounterProvider');
  }
  return actions;
};
