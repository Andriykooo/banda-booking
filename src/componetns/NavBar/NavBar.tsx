import { AppBar, Avatar, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [value, setValue] = useState(0);
    useEffect(() => {
        setValue(router.pathname !== '/kitchen' ? 0 : 1)
    }, [router])

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
            <AppBar position="static" color="default" style={{ backgroundColor: "white", display: "flex", justifyContent: 'space-between', flexDirection: "inherit", padding: '0 40px 0 40px'}}>
                <div style={{ width: "max-content", display: "flex", justifyContent: 'space-between', flexDirection: "inherit"}}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img alt="Remy Sharp" src="https://bandapixels.com/images/logo-black.svg" style={{ width: '148px', height: '40px', marginRight: '20px'}} />
                    </div>
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
                        <Link href={'/rooms'}>
                            <Tab style={{ padding: '45px 16px 34px 16px'}} label="Перемовки" {...a11yProps(0)} />
                        </Link>
                       <Link  href={'/kitchen'}>
                           <Tab style={{ padding: '45px 16px 34px 16px'}} label="Їжа приймалки" {...a11yProps(1)} />
                       </Link>
                    </Tabs>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "max-content"}}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
            </AppBar>
            </div>
        </div>
    )
}