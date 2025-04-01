import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

function CardListPage() {
  const { listId } = useParams<{ listId: string }>();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Card List {listId}
      </Typography>
      {/* TODO: Add card list content */}
    </Container>
  );
}

export default CardListPage; 