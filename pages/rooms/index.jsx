import { Box, Typography } from '@mui/material';
import * as React from 'react';
import {BookingModal} from "../../src/componetns/Modal/BookingModal";
import { useState } from "react";
import { usersAPI } from "../../src/api/auth-request";

const Room = ({ number, icon ,openModal}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        background: '#F5F5F5',
        border: '1px solid #b9b9b9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px',
      }}
      onClick={() => {
        openModal(number)
      }}
    >
      <Typography
        variant='h3'
        component='h3'
        sx={{ fontFamily: 'Inter', color: '#b9b9b9', top: '37px', left: '13px', position: 'absolute' }}
      >
        {number}
      </Typography>
      <img src={icon} />
    </Box>
  );
};

const Subtitle = ({ children }) => {
  return (
    <div style={{}}>
      <Typography
        variant='div'
        sx={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: '24px',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: 'max-content'
          }}

        >
          {children}
          <div
            style={{
              position: 'absolute',
              width: '110%',
              height: '5px',
              backgroundColor: 'yellow',
              bottom: 10,
              zIndex: -1,
            }}
          />
        </div>
      </Typography>
    </div>
  );
};

const Rooms = () => {
  const [roomData, setRoomData] = useState();

  const handleGetRoom = (room) => {
    const currentDate = new Date();
    const endDate = currentDate.setDate(currentDate.getDate() + 5);
    usersAPI.getMeetingRoom(room, currentDate.toString(), endDate.toString()).then((res) => {
      setRoomData(res.data);
    })
  }
  const [showModal, setShowModal] = useState({
    id: 0,
    title: '',
    show: false,
  });

  const open = (number) => {
    setShowModal({ id: number, title: `Room - ${number}`,  show: true })
  }
  const onHandlePost = () => {
    const roomToSet = {
      roomName: "open-space_left",
      timeFrom: "2022-09-18T11:57:47.017Z",
      timeTo: "2022-09-18T11:57:47.017Z",
      userId: 0,
    }
    usersAPI.postMeetingRoom(roomToSet).then((res) => {
      console.log(res, 'responseCreate');
    })
  }
  return (
    <>

      <Box sx={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '64px',
            lineHeight: '16px',
            color: '#B9B9B9',
            marginTop: '20px',
            marginBottom: '70px',
          }}
          gutterBottom
          component='div'
        >
          TALKING ROOMS
        </Typography>
        <Box sx={{ margin: '0 auto' }}>
          <Box sx={{ margin: '10px 0', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Subtitle>FIRST BUILDING</Subtitle>
            <Subtitle>SECOND BUILDING</Subtitle>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'minmax(100px, 480px)',
                gridTemplateRows: 'repeat(2, minmax(100px, 1fr))',
                gap: '27px',
                marginRight: '20px',
              }}
            >
              <Room number='1' icon={'/images/room-6.svg'} openModal={open}/>
              <Room number='2' icon={'/images/room-6.svg'} openModal={open}/>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
              <Box sx={{ display: 'grid', gridTemplateRows: 'minmax(100px, 220px) minmax(100px, 1fr)', gap: '14px' }}>
                <Room number='3' icon={'/images/room-2.svg'} openModal={open}/>
                <Room number='4' icon={'/images/room-5.svg'} openModal={open}/>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateRows: '250px', alignContent: 'end', gap: '10px' }}>
                <Room number='5' icon={'/images/room-3.svg'} openModal={open}/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {showModal.show &&
        <BookingModal
          open={showModal.show}
          title={showModal.title}
          handleClose={() => {
            setShowModal({
              id: 0,
              title: '',
              show: false
            })
          }}
        />}
    </>

  );
};


export default Rooms;
