import {AppBar, Avatar, Box, Icon, Tab, Tabs, Typography} from "@mui/material";
import {useState} from "react";

export default function Navbar() {
    const [value, setValue] = useState(0);

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-auto-tabpanel-${index}`}
                aria-labelledby={`scrollable-auto-tab-${index}`}
                {...other}
            >
                <Box p={3}>{children}</Box>
            </Typography>
        );
    }

    function a11yProps(index) {
        return {
            id: `scrollable-auto-tab-${index}`,
            "aria-controls": `scrollable-auto-tabpanel-${index}`
        };
    }

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <div style={{display: "flex", justifyContent: 'space-between'}}>
            <div style={{width: '100%'}}>
            <AppBar position="static" color="default" style={{ backgroundColor: "white", display: "flex", justifyContent: 'space-between', flexDirection: "inherit"}}>
                <div style={{ width: "max-content", display: "flex", justifyContent: 'space-between', flexDirection: "inherit"}}>
                    <img alt="Remy Sharp" src="https://bandapixels.com/images/logo-black.svg" style={{ width: '156px', height: '53px', marginRight: '20px', padding: '0 0 0 25px'}} />
                    <Tabs
                        style={{ width: "max-content"}}
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab style={{ padding: '10px 16px 0 16px'}} label="Перемовки" {...a11yProps(0)} />
                        <Tab style={{ padding: '10px 16px 0 16px'}} label="Їжа приймалки" {...a11yProps(1)} />
                    </Tabs>
                </div>
                <div style={{ padding: '0 20px', display: "flex", justifyContent: "flex-end", alignItems: "center", width: "max-content"}}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Typography style={{ color: "black", marginLeft: '10px'}}>Best user</Typography>
                </div>
            </AppBar>
       
            </div>
        </div>
    )
}