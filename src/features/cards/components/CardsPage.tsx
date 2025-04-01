import { Container, Typography } from '@mui/material';

function CardsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <section>
        <Typography variant="h3" component="h1" gutterBottom>
          Cards
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center">
          Manage and review your flashcards
        </Typography>
      </section>
      <section>
        {/* Content will be added in future implementations */}
      </section>
    </Container>
  );
}

export default CardsPage;

