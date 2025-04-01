import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface EmptyStateProps {
  onCreateClick: () => void;
}

// Null Object Pattern: Represents empty state of card lists
export function EmptyState({ onCreateClick }: EmptyStateProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        py: 8,
      }}
    >
      <Typography variant="h5" color="text.secondary">
        You don't have any card lists yet
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Create your first list to start learning
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onCreateClick}
      >
        Create List
      </Button>
    </Box>
  );
} 