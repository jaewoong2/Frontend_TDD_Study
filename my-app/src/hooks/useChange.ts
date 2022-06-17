import { useState } from 'react';

const useChange = (
  initValue: string,
): readonly [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [state, setState] = useState(initValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return [state, onChange];
};

export default useChange;
