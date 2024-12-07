import React, { createContext, useContext, useReducer } from 'react';
import { MoodEntry } from '../types/mood';

interface MoodState {
  entries: MoodEntry[];
}

type MoodAction =
  | { type: 'ADD_ENTRY'; payload: MoodEntry }
  | { type: 'DELETE_ENTRY'; payload: string };

const MoodContext = createContext<{
  state: MoodState;
  dispatch: React.Dispatch<MoodAction>;
} | null>(null);

const moodReducer = (state: MoodState, action: MoodAction): MoodState => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case 'DELETE_ENTRY':
      return {
        ...state,
        entries: state.entries.filter((entry) => entry.id !== action.payload),
      };
    default:
      return state;
  }
};

export const MoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(moodReducer, { entries: [] });

  return (
    <MoodContext.Provider value={{ state, dispatch }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error('useMood must be used within a MoodProvider');
  }
  return context;
};