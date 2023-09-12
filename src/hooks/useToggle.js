import { useState, useCallback } from 'react';

const useToggle = (defaultState = false) => {
  const [state, setState] = useState(defaultState);

  const toggleState = useCallback(() => {
    setState((prevState) => !prevState)
  }, []);
  
  return [
    state, 
    toggleState
  ];
};

export default useToggle;
