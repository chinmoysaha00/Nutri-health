import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../style.css'

function Form({ handleClickOpen, handleClose }) {
  const [user, setUser] = useState({
    name: " ",
    contact: " ",
    email: " "
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSend = () => {
    console.log(user);
  };

  return (
    <div>
      <Dialog open={handleClickOpen}>
        <DialogTitle id="form-dialog-title">CONTACT FORM</DialogTitle>
        <DialogContent>
          <DialogContentText className='fs-6'>
            NAME
          </DialogContentText>
          <TextField
            onChange={getUserData}
            value={user.name}
            name="name"
            autoFocus
            required
            margin="dense"
            label="Full Name"
            type="email"
            fullWidth
          />
          <DialogContentText>
            CONTACT
          </DialogContentText>
          <TextField
            onChange={getUserData}
            value={user.contact}
            name="contact"
            autoFocus
            required
            margin="dense"
            label="Contact Number"
            type="tel"
            fullWidth
          />
          <DialogContentText>
            EMAIL
            <TextField
              onChange={getUserData}
              value={user.email}
              name="email"
              autoFocus
              required
              margin="dense"
              label="Email address"
              type="email"
              fullWidth
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions className='mb-2'>
          <button className='btnModal mx-1' onClick={handleSend}>
            SEND
          </button>
          <button className='btnModal mx-3' onClick={handleClose} color="primary">
            CANCEL
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Form