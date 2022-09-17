import { CardActionArea, Chip, Grid, List, ListItem, ListItemText } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import * as React from 'react';

const Rooms = () => {
  return (
    <Container maxWidth='md'>
      <Grid container spacing={2} p={2}>
        <Grid item xs={6}>
          <Card
            sx={{ maxWidth: '100%', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            onClick={() => {
              console.log('open');
            }}
          >
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Room: 1
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemText primary='10:00' />
                    <Chip label='Reserved' />
                  </ListItem>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Rooms;
