import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type ChatState = {
  prompt: string;
};

export type ChatActions = {
  setPrompt: (prompt: string) => void;
  clearPrompt: () => void;
};

export type ChatStore = {
  prompt: string;
  actions: ChatActions;
};

export const defaultInitState: ChatState = {
  prompt: '',
};

export const useChatStore = create<ChatStore>(
  devtools(set => ({
    ...defaultInitState,
    actions: {
      setPrompt: (prompt: string) => set({ prompt }),
      clearPrompt: () => set({ prompt: '' }),
    },
  })) as any,
);

export const useChatActions = () => useChatStore(state => state.actions);
