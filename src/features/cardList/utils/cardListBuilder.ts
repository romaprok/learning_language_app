import { v4 as uuidv4 } from 'uuid';
import type { Card, CardList } from '../types';

// Builder Pattern: Allows step-by-step construction of CardList
export class CardListBuilder {
  private cardList!: Partial<CardList>;

  constructor() {
    this.reset();
  }

  reset(): void {
    const now = new Date();
    this.cardList = {
      id: uuidv4(),
      cards: [],
      createdAt: now,
      updatedAt: now,
    };
  }

  setTitle(title: string): this {
    this.cardList.title = title;
    return this;
  }

  setDescription(description: string): this {
    this.cardList.description = description;
    return this;
  }

  addCard(term: string, definition: string, examples?: string[]): this {
    const card: Card = {
      id: uuidv4(),
      term,
      definition,
      examples,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.cardList.cards?.push(card);
    return this;
  }

  build(): CardList {
    const result = this.cardList as CardList;
    this.reset();
    return result;
  }
} 