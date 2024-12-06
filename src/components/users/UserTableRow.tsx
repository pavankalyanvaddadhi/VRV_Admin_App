import React from 'react';
import { 
  TableRow, 
  TableCell, 
  IconButton, 
  Chip,
  Box
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { User } from '../../types';

interface UserTableRowProps {
  user: User;
  onDelete: (id: string) => void;
}

const UserTableRow = ({ user, onDelete }: UserTableRowProps) => (
  <TableRow>
    <TableCell>{user.name}</TableCell>
    <TableCell>{user.email}</TableCell>
    <TableCell>
      <Chip
        label={user.role}
        color="primary"
        size="small"
        variant="outlined"
      />
    </TableCell>
    <TableCell>
      <Chip
        label={user.status}
        color={user.status === 'active' ? 'success' : 'error'}
        size="small"
      />
    </TableCell>
    <TableCell>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton size="small" color="primary">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton 
          size="small" 
          color="error" 
          onClick={() => onDelete(user.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </TableCell>
  </TableRow>
);

export default UserTableRow;