import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { EmptyState } from '../../cardList/components/EmptyState';
import { useCardLists } from '../../cardList/hooks/useCardLists';

// Composite Pattern: Composes multiple components into a single view
function HomePage() {
  const navigate = useNavigate();
  const { isEmpty, createCardList } = useCardLists();

  const handleCreateClick = () => {
    const newList = createCardList({
      title: 'New Card List',
      description: 'My new learning cards',
    });
    navigate(`/lists/${newList.id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Facade Pattern: Simplifies the interface for the greeting section */}
      <section>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to FlashCards
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center">
          Create and study your flashcard lists
        </Typography>
      </section>

      {/* Strategy Pattern: Different content based on state */}
      <section>
        {isEmpty ? (
          <EmptyState onCreateClick={handleCreateClick} />
        ) : (
          // TODO: Add CardListGrid component when implementing the grid view
          null
        )}
      </section>
    </Container>
  );
}

export default HomePage; 