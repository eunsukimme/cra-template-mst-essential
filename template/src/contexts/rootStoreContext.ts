import { createContext } from 'react';
import { IRootStore } from '@stores/index';

const RootStoreContext = createContext<IRootStore>({} as IRootStore);

export const { Provider } = RootStoreContext;
export default RootStoreContext;
