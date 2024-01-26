import { create } from "zustand";

export type AppStore = {
  count: number;
  newCount: number;
  asyncCount: number;
  increment: () => void;
  incrementNew: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
}

// it is looking like a custom hook but can be used outside a component
export const useAppStore = create<AppStore>((set) => ({
  count: 0,
  newCount: 0,
  asyncCount: 0,

  increment: () => {
    set((state) => ({
      ...state,
      count: state.count + 1
    }));
  },

  incrementNew: () => {
    set((state) => ({ ...state, newCount: state.newCount + 1 }));
  },

  // async functions example here the increment would happen after one second
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ asyncCount: state.asyncCount + 1 }));
  },

  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}))