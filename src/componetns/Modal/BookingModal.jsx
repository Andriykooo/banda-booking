import * as React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


export const BookingModal = ({open, title, handleClose}) => {
  const closeModal = () => {
    handleClose();
  }

  const sendRegister = () => {
    closeModal();
  }

  return (
    <Dialog
      open={open}
      onClose={() => closeModal()}
      aria-describedby="alert-dialog-slide-description"

    >
<Box
  sx={{
  width: '600px'
}}>
  <DialogTitle sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column',
    gap: '10px'
  }}>
    <Box>
      <img alt="Remy Sharp" src="https://bandapixels.com/images/logo-black.svg"
           style={{width: '148px', height: '40px', marginRight: '20px'}}/>
    </Box>
    <box>
      Registration {title}
    </box>
  </DialogTitle>

  <DialogContent>
    <DialogContentText id="alert-dialog-slide-description">
      re
    </DialogContentText>
  </DialogContent>

  <DialogActions>
    <Button variant='contained' color='error' onClick={() => closeModal()}>Close</Button>
    <Button variant='contained' color='success' onClick={() => sendRegister()}>Apply</Button>
  </DialogActions>
</Box>

    </Dialog>

  );
};
