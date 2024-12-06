import React, { useState } from 'react';
import { 
  Box,
  Button,
  Paper,
  Table,
  TableContainer,
  Typography
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { Role } from '../types';
import { mockRoles } from '../data/mockData';
import RoleTableRow from './roles/RoleTableRow';
import RoleTableHeader from './roles/RoleTableHeader';
import AddRoleModal from './roles/AddRoleModal';

const RoleList = () => {
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddRole = (newRole: Omit<Role, 'id'>) => {
    const role: Role = {
      ...newRole,
      id: (roles.length + 1).toString(),
    };
    setRoles([...roles, role]);
  };

  const handleDeleteRole = (roleId: string) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  return (
    <>
      <Paper>
        <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" component="h2">
              Roles
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setIsAddModalOpen(true)}
            >
              Add Role
            </Button>
          </Box>
        </Box>
        <TableContainer>
          <Table>
            <RoleTableHeader />
            <tbody>
              {roles.map((role) => (
                <RoleTableRow
                  key={role.id}
                  role={role}
                  onDelete={handleDeleteRole}
                />
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Paper>

      <AddRoleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddRole}
      />
    </>
  );
};

export default RoleList;