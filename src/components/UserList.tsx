import React, { useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import { 
  Box,
  Button,
  Paper,
  Table,
  TableContainer,
  Typography
} from '@mui/material';
import { User } from '../types';
import { mockUsers } from '../data/mockData';
import UserTableRow from './users/UserTableRow';
import UserTableHeader from './users/UserTableHeader';
import AddUserModal from './users/AddUserModal';

const UserList = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddUser = (newUser: Omit<User, 'id' | 'createdAt'>) => {
    const user: User = {
      ...newUser,
      id: (users.length + 1).toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setUsers([...users, user]);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <>
      <Paper>
        <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" component="h2">
              Users
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setIsAddModalOpen(true)}
            >
              Add User
            </Button>
          </Box>
        </Box>
        <TableContainer>
          <Table>
            <UserTableHeader />
            <tbody>
              {users.map((user) => (
                <UserTableRow
                  key={user.id}
                  user={user}
                  onDelete={handleDeleteUser}
                />
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Paper>

      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddUser}
      />
    </>
  );
};

export default UserList;