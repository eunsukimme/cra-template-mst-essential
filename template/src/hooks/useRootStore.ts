import { useContext } from 'react';
import RootStoreContext from '@contexts/rootStoreContext';

export default function useRootStore() {
  const rootStore = useContext(RootStoreContext);

  return rootStore;
}
