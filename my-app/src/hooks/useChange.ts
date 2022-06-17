import { useState } from 'react';

const useChange = (
  initValue: string,
): readonly [
  string,
  (string: string) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [state, setState] = useState(initValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const updateState = (string: string) => {
    setState(string);
  };

  return [state, updateState, onChange];
};

export default useChange;
