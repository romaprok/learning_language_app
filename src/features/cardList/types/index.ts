// Entity Types (Domain Models)
export interface Card {
  id: string;
  term: string;
  definition: string;
  examples?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CardList {
  id: string;
  title: string;
  description?: string;
  cards: Card[];
  createdAt: Date;
  updatedAt: Date;
}

// DTO Types (Data Transfer Objects)
export interface CreateCardListDTO {
  title: string;
  description?: string;
}

// View Models (Presentation Models)
export interface CardListPreview {
  id: string;
  title: string;
  description?: string;
  cardCount: number;
} 