import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, IconButton, TextField } from '@mui/material';
import { useState } from 'react';

const EditContactForm = ({ handleEdit, oldName, oldNumber, cancelEdit }) => {
  const [name, setName] = useState(oldName);
  const [number, setNumber] = useState(oldNumber);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    handleEdit({ name, number });
    setName('');
    setNumber('');
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', gap: '8px' }}
      onSubmit={handleSubmit}
      fullWidth
    >
      <TextField
        required
        id="standard-text"
        label="Name"
        type="text"
        defaultValue={name}
        variant="standard"
        onChange={e => setName(e.target.value)}
      />
      <TextField
        required
        id="standard-number"
        label="Number"
        type="tel"
        defaultValue={number}
        variant="standard"
        onChange={e => setNumber(e.target.value)}
      />

      <IconButton aria-label="success" color="success" type="submit">
        <CheckCircleIcon />
      </IconButton>
      <IconButton
        aria-label="cancel"
        color="error"
        type="button"
        onClick={cancelEdit}
      >
        <CancelIcon />
      </IconButton>
    </Box>
  );
};

export default EditContactForm;
