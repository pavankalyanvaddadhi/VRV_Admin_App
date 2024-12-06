import React from 'react';
import { 
  TableRow, 
  TableCell, 
  IconButton, 
  Chip,
  Box
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Role } from '../../types';

interface RoleTableRowProps {
  role: Role;
  onDelete: (id: string) => void;
}

const RoleTableRow = ({ role, onDelete }: RoleTableRowProps) => (
  <TableRow>
    <TableCell>{role.name}</TableCell>
    <TableCell>{role.description}</TableCell>
    <TableCell>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {role.permissions.map((permission) => (
          <Chip
            key={permission.id}
            label={permission.name}
            size="small"
            variant="outlined"
            color="primary"
          />
        ))}
      </Box>
    </TableCell>
    <TableCell>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton size="small" color="primary">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton 
          size="small" 
          color="error" 
          onClick={() => onDelete(role.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </TableCell>
  </TableRow>
);

export default RoleTableRow;