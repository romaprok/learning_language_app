import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Lazy load components for code splitting
const HomePage = lazy(() => import('./features/home/components/HomePage'));
const CardListPage = lazy(() => import('./features/cardList/components/CardListPage'));
const CardsPage = lazy(() => import('./features/cards/components/CardsPage'));
const NotFoundPage = lazy(() => import('./features/shared/components/NotFoundPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/lists/:listId',
    element: <CardListPage />,
  },
  {
    path: '/cards',
    element: <CardsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]); 