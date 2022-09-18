import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

const table = require('/public/svg/table.svg');

const Table = ({ number }) => {
  return (
    <Box sx={{ minWidth: '230px', position: 'relative' }}>
      <Image component='img' height='230px' width='230px' src={table} alt='table' />
      <Typography
        variant='h3'
        component='h3'
        sx={{
          fontFamily: 'Inter',
          color: '#b9b9b9',
          top: '46%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
        }}
      >
        {number}
      </Typography>
    </Box>
  );
};

const Kitchen = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1179px',
        margin: '0 auto',
      }}
    >
      <div
        style={{ maxWidth: '640px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
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
          DINING ROOM
        </Typography>
      </div>
      <Table number={1} />
      <Table number={2} />
      <Table number={3} />
      <Table number={4} />
    </div>
  );
};

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Kitchen;
