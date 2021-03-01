import React from 'react';
import { observer } from 'mobx-react-lite';
import useRootStore from '@hooks/useRootStore';

function App() {
  const { count, increase, decrease } = useRootStore();

  const handleClickInc = () => {
    increase();
  };

  const handleClickDec = () => {
    decrease();
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClickInc}> + </button>
      <button onClick={handleClickDec}> - </button>
    </div>
  );
}

export default observer(App);
