import React, { useState } from 'react';

import BottomNavigation from "@mui/material/BottomNavigation";
import { BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import DoneIcon from '@mui/icons-material/Done';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import Recent from './containers/Recent/Recent';
import Waiting from './containers/Waiting/Waiting';
import PreApproved from './containers/Pre-approved/Pre-approved';
import Declined from './containers/Declined/Declined';
import ViewAll from './containers/View-all/View-all';

import "../shared/styles/styles.css";

const Dashboard = () => {
    const [value, setValue] = useState(0);
    const [page, setPage] = useState("recent");
    return (
        <React.Fragment>
            <BottomNavigation showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction onClick={() => { setPage("recent") }} label={"Recent"} icon={<RestoreIcon />} />
                <BottomNavigationAction onClick={() => { setPage("waiting") }} label={"Waiting Approval"} icon={<HourglassBottomIcon />} />
                <BottomNavigationAction onClick={() => { setPage("pre-approved") }} label={"Pre-Approved"} icon={<DoneIcon />} />
                <BottomNavigationAction onClick={() => { setPage("declined") }} label={"Declined"} icon={<ThumbDownAltIcon />} />
                <BottomNavigationAction onClick={() => { setPage("view-all") }} label={"All clients"} icon={<GroupsRoundedIcon />} />
            </BottomNavigation>
            <div className={"container"}>
                {page === "recent" && <Recent />}
                {page === "waiting" && <Waiting />}
                {page === "pre-approved" && <PreApproved />}
                {page === "declined" && <Declined />}
                {page === "view-all" && <ViewAll />}
            </div>
        </React.Fragment>
    )
}

export default Dashboard;