import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import DevicesIcon from '@mui/icons-material/Devices';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';



export const SidebarData = [
    {
        id:111
    },
    {
        title: "Dashbaord",
        icon: <DashboardIcon />,
        link: "/dashboard",
        id:1
    },
    {
        title: "Company",
        icon: <AppsIcon />,
        link: "/company",
        id:2
    },
    {
        title: "Customer",
        icon: <SecurityIcon />,
        link: "/customer",
        id:3
    },
    {
        title: "Reports",
        icon: <AssignmentIcon />,
        link: "/reports",
        id:4
    },
    {
        title: "Commision",
        icon: <SupervisedUserCircleIcon />,
        link: "/commision",
        id:5
    },
    {
        title: "Vendor",
        icon: <WorkIcon />,
        link: "/vendor",
        id:6
    },
    {
        title: "Proposals",
        icon: <ChatIcon />,
        link: "/proposals",
        id:12
    },
    { 
        id:112
    },
    {
        title: "Leads",
        icon: <BurstModeIcon />,
        link: "/leads",
        id:15
    },
    {
        title: "Workflows",
        icon: <DevicesIcon />,
        link: "/workflows",
        id:10
    },
    {
        title: "My Tasks",
        icon: <ListAltIcon />,
        link: "/mytasks",
        id:11
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings",
        id:113
    }

]

//npm install @material-ui/core
//npm install @material-ui/icons