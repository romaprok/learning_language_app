import type { CardList } from '../types';
import { CardListBuilder } from './cardListBuilder';

// Factory Pattern: Creates CardList instances with consistent structure
export class CardListFactory {
  private static builder = new CardListBuilder();

  // Simple factory method for basic card lists
  static create(params: { title: string; description: string }): CardList {
    return this.builder
      .setTitle(params.title)
      .setDescription(params.description)
      .build();
  }

  // Factory method for creating a card list with initial cards
  static createWithCards(params: { title: string; description: string; cards: Array<{ term: string; definition: string; examples?: string[] }> }): CardList {
    this.builder
      .setTitle(params.title)
      .setDescription(params.description);
    
    params.cards.forEach(card => {
      this.builder.addCard(card.term, card.definition, card.examples);
    });

    return this.builder.build();
  }

  // Factory Method: Creates a preview version of the card list
  static createPreview(cardList: CardList) {
    return {
      id: cardList.id,
      title: cardList.title,
      description: cardList.description,
      cardCount: cardList.cards.length,
    };
  }
} 