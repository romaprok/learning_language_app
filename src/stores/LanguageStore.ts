// Observer Pattern - MobX Store Implementation
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

export class LanguageStore {
  currentLanguage: string = 'English';

  constructor() {
    // MobX decorator pattern
    makeAutoObservable(this);
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
  }
}

// Context API Pattern for global state management
export const LanguageStoreContext = createContext<LanguageStore | null>(null);

// Custom Hook Pattern
export const useLanguageStore = () => {
  const store = useContext(LanguageStoreContext);
  if (!store) {
    throw new Error('useLanguageStore must be used within a LanguageStoreProvider');
  }
  return store;
}; 