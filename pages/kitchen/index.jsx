import { Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

const table = require('/public/svg/table.svg');

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
        margin: '0 auto'
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
      <div style={{ minWidth: '230px' }}>
        <Image component='img' height='230px' width='230px' src={table} alt='table' />
      </div>
      <div style={{ minWidth: '230px' }}>
        <Image component='img' height='230px' width='230px' src={table} alt='table' />
      </div>
      <div style={{ minWidth: '230px' }}>
        <Image component='img' height='230px' width='230px' src={table} alt='table' />
      </div>
      <div style={{ minWidth: '230px' }}>
        <Image component='img' height='230px' width='230px' src={table} alt='table' />
      </div>
    </div>
  );
};

export default Kitchen;
