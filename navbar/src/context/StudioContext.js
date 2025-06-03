import { createContext, useContext } from 'react';

export const StudioContext = createContext();

export const useStudio = () => useContext(StudioContext);
