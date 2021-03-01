import { types, Instance } from 'mobx-state-tree';

const RootStore = types
  .model({
    count: types.number,
  })
  .actions((self) => ({
    increase() {
      self.count += 1;
    },
    decrease() {
      self.count -= 1;
    },
  }));

const rootStore = RootStore.create({ count: 0 });

export type IRootStore = Instance<typeof rootStore>;

export default rootStore;
