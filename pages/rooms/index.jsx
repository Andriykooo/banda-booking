import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
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
        sx={{ color: '#b9b9b9', top: '37px', left: '13px', position: 'absolute' }}
      >
        {number}
      </Typography>
      <img src={icon} />
    </Box>
  );
};

const Rooms = () => {
  return (
    <Container sx={{margin: '20px auto'}}>
      <Box sx={{ margin: '10px 0', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Typography>First Building</Typography>
        <Typography>Second Building</Typography>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'minmax(20%, 492px)',
            gridTemplateRows: 'repeat(2, minmax(20%, 375px))',
            gap: '27px',
            marginRight: '20px',
          }}
        >
          <Room number='1' icon={'/images/room-6.svg'} />
          <Room number='2' icon={'/images/room-6.svg'} />
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
          <Box sx={{ display: 'grid', gridTemplateRows: '30%', gap: '14px' }}>
            <Room number='1' icon={'/images/room-2.svg'} />
            <Room number='2' icon={'/images/room-5.svg'} />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateRows: '329px', alignContent: 'end', gap: '10px' }}>
            <Room number='3' icon={'/images/room-3.svg'} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Rooms;
