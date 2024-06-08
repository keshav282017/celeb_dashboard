

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const initialData = [
  { id: 1, name: 'Item 1', description: 'Description 1' },
  { id: 2, name: 'Item 2', description: 'Description 2' },
  { id: 3, name: 'Item 3', description: 'Description 3' },
];

const CustomTable = () => {
  const [data, setData] = useState(initialData);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleAddClick = () => {
    setOpenAddDialog(true);
  };

  const handleEditClick = (item) => {
    setEditedItem(item);
    setItemName(item.name);
    setItemDescription(item.description);
    setOpenEditDialog(true);
  };

  const handleDeleteClick = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
    setItemName('');
    setItemDescription('');
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setItemName('');
    setItemDescription('');
    setEditedItem(null);
  };

  const handleAddItem = () => {
    if (itemName.trim() !== '' && itemDescription.trim() !== '') {
      const newItem = {
        id: data.length + 1,
        name: itemName.trim(),
        description: itemDescription.trim(),
      };
      setData([...data, newItem]);
      setItemName('');
      setItemDescription('');
      setOpenAddDialog(false);
    }
  };

  const handleEditItem = () => {
    if (itemName.trim() !== '' && itemDescription.trim() !== '') {
      const updatedData = data.map(item =>
        item.id === editedItem.id ? { ...item, name: itemName.trim(), description: itemDescription.trim() } : item
      );
      setData(updatedData);
      setItemName('');
      setItemDescription('');
      setEditedItem(null);
      setOpenEditDialog(false);
    }
  };

  const handleInputChange = (e, field) => {
    if (field === 'name') {
      setItemName(e.target.value);
    } else if (field === 'description') {
      setItemDescription(e.target.value);
    }
  };

  return (
    <div>
      {/* Add Button */}
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Item
      </Button>

      {/* Table */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => handleEditClick(item)}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteClick(item.id)} style={{ marginLeft: '8px' }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Item Dialog */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="itemName"
            label="Name"
            type="text"
            fullWidth
            value={itemName}
            onChange={(e) => handleInputChange(e, 'name')}
          />
          <TextField
            margin="dense"
            id="itemDescription"
            label="Description"
            type="text"
            fullWidth
            value={itemDescription}
            onChange={(e) => handleInputChange(e, 'description')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog}>Cancel</Button>
          <Button onClick={handleAddItem} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Item Dialog */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="itemName"
            label="Name"
            type="text"
            fullWidth
            value={itemName}
            onChange={(e) => handleInputChange(e, 'name')}
          />
          <TextField
            margin="dense"
            id="itemDescription"
            label="Description"
            type="text"
            fullWidth
            value={itemDescription}
            onChange={(e) => handleInputChange(e, 'description')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={handleEditItem} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomTable;
