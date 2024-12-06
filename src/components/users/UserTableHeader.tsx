import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

const UserTableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Role</TableCell>
      <TableCell>Status</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  </TableHead>
);

export default UserTableHeader;