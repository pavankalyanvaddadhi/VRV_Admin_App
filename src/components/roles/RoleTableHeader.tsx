import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

const RoleTableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Permissions</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  </TableHead>
);

export default RoleTableHeader;