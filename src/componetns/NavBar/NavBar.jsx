import { AppBar, Avatar, Button, Divider, Menu, MenuItem, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useGetUser } from '../../hooks/useGetUser';

export default function Navbar() {
  const router = useRouter();
  const user = useGetUser();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(router.pathname !== '/kitchen' ? 0 : 1);
  }, [router]);

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '100%' }}>
        <AppBar
          position='static'
          color='default'
          style={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'inherit',
            padding: '0 40px 0 40px',
          }}
        >
          <div
            style={{ width: 'max-content', display: 'flex', justifyContent: 'space-between', flexDirection: 'inherit' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                alt='Remy Sharp'
                src='https://bandapixels.com/images/logo-black.svg'
                style={{ width: '148px', height: '40px', marginRight: '20px' }}
              />
            </div>
            <Tabs
              style={{ width: 'max-content' }}
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
              variant='scrollable'
              scrollButtons='auto'
              aria-label='scrollable auto tabs example'
            >
              <Link href={'/rooms'}>
                <Tab style={{ padding: '45px 16px 34px 16px' }} label='Перемовки' {...a11yProps(0)} />
              </Link>
              <Link href={'/kitchen'}>
                <Tab style={{ padding: '45px 16px 34px 16px' }} label='Їжа приймалки' {...a11yProps(1)} />
              </Link>
            </Tabs>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: 'max-content' }}>
            <Button
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Avatar alt='Remy Sharp' src='/images/user.svg' />
            </Button>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
             <Link href={'/account'}>
               <MenuItem>
                 <Image src='/images/user-small.svg' height={20} width={20} />
                 <Typography variant='span' sx={{ marginLeft: '10px' }}>
                   User {user?.username}
                 </Typography>
               </MenuItem>
             </Link>
              <Divider />
              <MenuItem onClick={logout}>
                <Typography variant='span' sx={{ marginRight: '10px' }}>
                  Logout out
                </Typography>
                <Image src='/images/logout.svg' height={18} width={18} />
              </MenuItem>
            </Menu>
          </div>
        </AppBar>
      </div>
    </div>
  );
}
