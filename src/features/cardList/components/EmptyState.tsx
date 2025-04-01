import { Box, Button, Typography } from '@mui/material';

interface EmptyStateProps {
  onCreateClick: () => void;
}

// Null Object Pattern: Represents empty state of card lists
export function EmptyState({ onCreateClick }: EmptyStateProps) {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h5" gutterBottom>
        No Card Lists Yet
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Create your first card list to start learning
      </Typography>
      <Button variant="contained" onClick={onCreateClick}>
        Create Card List
      </Button>
    </Box>
  );
} 