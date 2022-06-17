import { useState, useEffect } from 'react';

type ListsType = {
  lists: string[];
  addList: (list: string) => () => void;
  removeList: (index: number) => void;
  updateList: (index: number, list: string) => void;
};

const useLists = (initValue: string[]): ListsType => {
  const [state, setState] = useState(initValue);

  const addList = (list: string) => {
    return () => {
      setState((prev) => [...prev, list]);
    };
  };

  const removeList = (index: number) => {
    setState((prev) => [...prev.filter((_, i) => i !== index)]);
  };

  const updateList = (index: number, list: string) => {
    setState((prev) => [...prev.map((v, i) => (i !== index ? v : list))]);
  };

  return { lists: state, addList, removeList, updateList };
};

export default useLists;
