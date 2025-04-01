import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Page Not Found</Typography>
        <Typography variant="body1" color="text.secondary">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Go Home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFoundPage; 