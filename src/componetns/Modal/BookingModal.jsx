import * as React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";

export const BookingModal = ({open, title, handleClose}) => {
  const [startDate, setStartDate] = useState(new Date());
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
          width: '600px',
          height: '400px'
        }}>
        <DialogTitle sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
          <Box sx={{
            '& .react-datepicker-wrapper':{
              '& .react-datepicker__tab-loop':{
                display:'block',
                '& .react-datepicker-popper':{
                  position: 'fixed !important',
                },
              }
            },
              '& input': {
                padding: '10px',
                borderRadius: '6px',
                width: '300px'
              }
          }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />

            <h1>Тута щота должно быть, но не мае</h1>
          </Box>

        </DialogContent>


      </Box>
      <DialogActions>
        <Button variant='contained' color='error' onClick={() => closeModal()}>Close</Button>
        <Button variant='contained' color='success' onClick={() => sendRegister()}>Apply</Button>
      </DialogActions>
    </Dialog>

  );
};
