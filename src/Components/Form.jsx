import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Redirect from './Redirect';
import '../style.css'

function Form({ handleClickOpen, handleClose }) {
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({
    name: false,
    contact: false,
    email: false,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleFormSend = () => {
    if (!name || !contact || !email || !validateEmail(email)) {
      setFormErrors({
        name: !name,
        contact: !contact,
        email: !email || !validateEmail(email),
      });
      return;
    }

    axios.post(`https://sheet.best/api/sheets/b72cdff4-7c1d-4f5e-b0c2-86bde7160c2c`, {
      name, contact, email
    })

    // setInterval(() => {
    //   handle;
    // }, 2000);

      .then(response => {
        console.log('Form data sent successfully:', response.data);
        // handleClose();
      })

      .catch(error => {
        console.error('Error sending form data:', error);
      });
    alert("Submitted!");

    setRedirect(true);
  };

const handleRedirectClose = () => {
    setRedirect(false);
};

  return (
    <div>
      <Dialog open={handleClickOpen} onClose={handleClose}>
        <DialogTitle id="form-dialog-title" >CONTACT FORM</DialogTitle>
        <DialogContent>
          <DialogContentText className='fs-6'>
            NAME
          </DialogContentText>
          <TextField
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
            margin="dense"
            label="Full Name"
            type="email"
            fullWidth
            error={formErrors.name}
            helperText={formErrors.name && 'Name is required'}
          />
          <DialogContentText>
            CONTACT
          </DialogContentText>
          <TextField
            onChange={(e) => setContact(e.target.value)}
            autoFocus
            required
            margin="dense"
            label="Contact Number"
            type="tel"
            fullWidth
            error={formErrors.contact}
            helperText={formErrors.contact && 'Contact number is required'}

          />
          <DialogContentText>
            EMAIL
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
              margin="dense"
              label="Email address"
              type="email"
              fullWidth
              error={formErrors.email}
              helperText={(formErrors.email && !validateEmail(email)) ? 'Invalid email format' : 'Email is required'}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions className='mb-2'>
          <button className='btnModal mx-1' onClick={handleFormSend}>
            SEND
          </button>
          <button className='btnModal mx-3' onClick={handleClose}>
            CANCEL
          </button>
        </DialogActions>
      </Dialog>
      {redirect && <Redirect handleFormSend={handleFormSend} handleRedirectClose={handleRedirectClose} />}
    </div>
  );
}

export default Form