import { Typography} from '@mui/material';
import * as React from 'react';
import Image from 'next/image'

const table = require('/public/svg/table.svg');

const Rooms = () => {
  return (

    <div style={{padding: '40px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'}}>
        <div style={{display: "flex", gap: '40px', flexWrap: "wrap", justifyContent: "space-between"}}>
            <div style={ {maxWidth: '640px', width: '100%', display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <Typography style={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '64px',
                    lineHeight: '16px',
                    color: '#B9B9B9',
                }}  gutterBottom component='div'
                >DINING ROOM</Typography>
            </div>
            <div style={{minWidth: '230px'}}>
            <Image
                component='img'
                height='230px'
                width='230px'
                src={table}
                alt='table'
            />
            </div>
            <div style={{minWidth: '230px'}}>
            <Image
                component='img'
                height='230px'
                width='230px'
                src={table}
                alt='table'
            />
            </div>
            <div style={{minWidth: '230px'}}>
            <Image
                component='img'
                height='230px'
                width='230px'
                src={table}
                alt='table'
            />
            </div>
            <div style={{minWidth: '230px'}}>
            <Image
                component='img'
                height='230px'
                width='230px'
                src={table}
                alt='table'
            />
            </div>
         </div>
    </div>
  );
};

export default Rooms;
