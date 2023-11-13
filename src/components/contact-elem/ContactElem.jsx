import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Avatar,
  CardActions,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import EditContactForm from 'components/form/EditContactForm';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
  patchContact,
} from 'redux/contacts/contacts-operations';

export const ContactElem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const editClick = () => {
    setEdit(true);
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  const handleEdit = async ({ name, number }) => {
    try {
      await dispatch(patchContact({ contactId: id, name, number })).unwrap();
      dispatch(fetchContacts());
      toast.success('Contact was edited!', {
        duration: 3000,
        position: 'top-right',
      });
      setEdit(false);
    } catch (error) {
      toast.error('Something was wrong. Please try again!', {
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>{name[0]}</Avatar>
        </ListItemAvatar>
        {!edit ? (
          <>
            <ListItemText
              primary={name}
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {number}
                </Typography>
              }
            />
            <CardActions disableSpacing>
              <IconButton
                edge="end"
                color="info"
                sx={{ mr: 1 }}
                aria-label="editContact"
                onClick={() => editClick()}
              >
                <BorderColorIcon />
              </IconButton>
              <IconButton
                edge="end"
                color="warning"
                aria-label="delete"
                onClick={() => dispatch(deleteContact(id))}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </>
        ) : (
          <EditContactForm
            handleEdit={handleEdit}
            oldName={name}
            oldNumber={number}
            cancelEdit={cancelEdit}
          />
        )}
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
