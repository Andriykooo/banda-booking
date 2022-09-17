import { Box, Typography } from '@mui/material';
import * as React from 'react';

const Room = ({ children, number, icon }) => {
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
        padding: '120px 0 73px',
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
    <Typography
      sx={{
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '24px',
      }}
    >
      {children}
    </Typography>
  );
};

const Rooms = () => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '64px',
          lineHeight: '16px',
          color: '#B9B9B9',
        }}
        gutterBottom
        component='div'
      >
        TALKING ROOMS
      </Typography>
      <Box sx={{margin: '0 auto'}}>
        <Box sx={{ margin: '10px 0', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <Subtitle>FIRST BUILDING</Subtitle>
          <Subtitle>SECOND BUILDING</Subtitle>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'minmax(100px, 480px)',
              gridTemplateRows: 'repeat(2, minmax(100px, 300px))',
              gap: '27px',
              marginRight: '20px',
            }}
          >
            <Room number='1' icon={'/images/room-6.svg'} />
            <Room number='2' icon={'/images/room-6.svg'} />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
            <Box sx={{ display: 'grid', gridTemplateRows: '250px 363px', gap: '14px' }}>
              <Room number='1' icon={'/images/room-2.svg'} />
              <Room number='2' icon={'/images/room-5.svg'} />
            </Box>
            <Box sx={{ display: 'grid', gridTemplateRows: '250px', alignContent: 'end', gap: '10px' }}>
              <Room number='3' icon={'/images/room-3.svg'} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Rooms;
