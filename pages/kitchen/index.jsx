import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import {BookingModal} from "../../src/componetns/Modal/BookingModal";
import {useState} from "react";

const table = require('/public/svg/table.svg');

const Table = ({number, openModal}) => {
  return (
    <Box
      sx={{minWidth: '230px', position: 'relative', cursor:'pointer'}}
      onClick={() => {
        openModal(number)
      }}
    >
      <Image component='img' height='230px' width='230px' src={table} alt='table'/>
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
  const [showModal, setShowModal] = useState({
    id: 0,
    title: '',
    show: false,
  });

  const open = (number) => {
    setShowModal({ id: number, title: `Table - ${number}`,  show: true })
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1179px',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{maxWidth: '640px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
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
        </Box>

        <Table number={1} openModal={open}/>
        <Table number={2} openModal={open} />
        <Table number={3} openModal={open} />
        <Table number={4} openModal={open} />
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

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Kitchen;
