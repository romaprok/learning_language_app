import { useState } from 'react';
import { CardList } from '../types';
import { CardListFactory } from '../utils/cardListFactory';
import { log, handleException } from '@/utils/logger';

// Observer Pattern: Manages state and notifies components of changes
export function useCardLists() {
  const [cardLists, setCardLists] = useState<CardList[]>([]);

  const createCardList = (params: { title: string; description: string }): CardList => {
    try {
      log.info('Creating new card list', { title: params.title });
      const newList = CardListFactory.create(params);
      setCardLists((prev) => [...prev, newList]);
      log.info('Card list created successfully', { id: newList.id });
      return newList;
    } catch (error) {
      handleException(error as Error, 'createCardList');
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