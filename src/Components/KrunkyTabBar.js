import React from 'react';
import '../KrunkySite.css';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VideocamIcon from '@material-ui/icons/Videocam';
import { HomePagePanel } from "./TabPanels/HomePagePanel";
import { AboutPanel } from "./TabPanels/AboutPanel";
import { StreamPanel } from "./TabPanels/StreamPanel";

export const KrunkyTabBar = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`tabpanel-${index}`}
                {...other}
                >
                {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
                )}
            </div>
        );
    }
    const aSections = [
        {
        label: "Home Page",
        icon: <HomeIcon />,
        id: "home",
        contents: <HomePagePanel/>
        },
        {
        label: "About Me",
        icon: <FavoriteIcon />,
        id: "about",
        contents: <AboutPanel/>
        },
        {
        label: "Stream Info",
        icon: <VideocamIcon />,
        id: "stream",
        contents: <StreamPanel/>
        }
    ];

    return (
        <>
        <AppBar className="app-bar-wrapper" position="static">
            <Tabs value={value} onChange={handleChange}  className="tab-bar">
                {aSections.map((tab) => (
                    <Tab icon={tab.icon} label={tab.label} id={tab.id} />
                ))}
            </Tabs>
        </AppBar>
        {aSections.map((tab, index) => (
            <TabPanel value={value} index={index}>
                {tab.contents}
            </TabPanel>
        ))}
        </>
    );
}