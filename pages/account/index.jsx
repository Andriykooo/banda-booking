import * as React from 'react';
import {Avatar, Box, Button, Divider, List, ListItem, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useGetUser} from "../../src/hooks/useGetUser";


const Account = () => {
    const user = useGetUser();

    return (
        <div style={{padding: '40px'}}>
            <div>
                <div style={{ display: "flex", flexDirection: "column",  justifyContent:  "center",  alignItems: "center", width: "100%" }}>
                    <Avatar alt="Remy Sharp" src="/images/user.svg" />
                    <Typography gutterBottom variant='h5' component='div' sx={{marginTop: '20px'}}>
                        {user?.username}
                    </Typography>
                </div>
                <Box sx={{ display: 'flex', marginTop: '20px'}}>
                <div style={{ boxShadow: 'rgb(182 201 222 / 60%) 0px 2px 2px', marginTop: '10px', minWidth: '200px', height: '700px', backgroundColor: '#F5F5F5' }}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary=" Мої перемовки" />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="Мої їжа приймалки" />
                        </ListItem>
                    </List>
                </div>

                <div style={{ width: '85%'}}>
                    <div style={{display: "flex", flexDirection: "column", width: '100%'}}>
                        <ListItem style={{ display:'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #F0F2F5'}}>
                            <div style={{display: "flex", alignItems:"center", width: '100%'}}>
                                <Typography gutterBottom component='div' sx={{marginTop: '20px'}}>
                                    Photos
                                </Typography>
                                <Typography gutterBottom component='div' sx={{marginTop: '20px'}}>
                                    Dec 9, 2022
                                </Typography>
                            </div>
                            <Button variant="outlined" color='error' >cancel</Button>
                        </ListItem>

                        <ListItem style={{ display:'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #F0F2F5'}}>
                            <div style={{display: "flex", alignItems:"center", width: '100%'}}>
                                <Typography gutterBottom component='div' sx={{marginTop: '20px'}}>
                                    Photos
                                </Typography>
                                <Typography gutterBottom component='div' sx={{marginTop: '20px'}}>
                                    Dec 9, 2022
                                </Typography>
                            </div>
                            <Button variant="outlined" color='error' >cancel</Button>
                        </ListItem>
                    </div>
                </div>
                </Box>
            </div>
        </div>
    );
};

export default Account;
