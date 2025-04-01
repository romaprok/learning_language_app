import { useState } from 'react';
import { CardList } from '../types';
import { CardListFactory } from '../utils/cardListFactory';

// Observer Pattern: Manages state and notifies components of changes
export function useCardLists() {
  const [cardLists, setCardLists] = useState<CardList[]>([]);

  const createCardList = (params: { title: string; description: string }): CardList => {
    try {
      const newList = CardListFactory.create(params);
      setCardLists((prev) => [...prev, newList]);
      return newList;
    } catch (error) {
      console.error('Error creating card list:', error);
      throw error;
    }
  };

  const isEmpty = cardLists.length === 0;

  return {
    cardLists,
    createCardList,
    isEmpty,
  };
} 