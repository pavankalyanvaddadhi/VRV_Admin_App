import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  IconButton,
  Typography
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Permission } from '../../types';
import { mockPermissions } from '../../data/mockData';

interface AddRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (role: { name: string; description: string; permissions: Permission[] }) => void;
}

const AddRoleModal = ({ isOpen, onClose, onSave }: AddRoleModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState<Permission[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name,
      description,
      permissions: selectedPermissions,
    });
    setName('');
    setDescription('');
    setSelectedPermissions([]);
    onClose();
  };

  const togglePermission = (permission: Permission) => {
    setSelectedPermissions((prev) =>
      prev.some((p) => p.id === permission.id)
        ? prev.filter((p) => p.id !== permission.id)
        : [...prev, permission]
    );
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Add New Role
          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Role Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              fullWidth
              multiline
              rows={3}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Permissions
              </Typography>
              <FormControl component="fieldset" fullWidth>
                <FormGroup>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                    {mockPermissions.map((permission) => (
                      <Box
                        key={permission.id}
                        sx={{
                          p: 2,
                          border: 1,
                          borderColor: 'divider',
                          borderRadius: 1,
                          '&:hover': { bgcolor: 'action.hover' }
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedPermissions.some((p) => p.id === permission.id)}
                              onChange={() => togglePermission(permission)}
                            />
                          }
                          label={
                            <Box>
                              <Typography variant="body1">{permission.name}</Typography>
                              <Typography variant="caption" color="text.secondary">
                                {permission.description}
                              </Typography>
                            </Box>
                          }
                        />
                      </Box>
                    ))}
                  </Box>
                </FormGroup>
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">Save Role</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddRoleModal;