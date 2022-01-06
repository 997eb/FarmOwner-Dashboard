import React, { useState, iseEffect, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchMonthsPicker } from '../../../API'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Picker = ({ handleDPickerChange }) => {

    const useStyles = makeStyles((theme) => ({

        MuiButton: {
            minWidth: '0px'
        }
    }));
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [fetchedPicker, setFetchedPicker] = useState([]);

    useEffect(() => {
        const fetchPicker = async () => {
            setFetchedPicker(await fetchMonthsPicker())
        }

        fetchPicker();

    }, [setFetchedPicker]);


    return (
        // I need to update the menu name with the selected option!
        <div>
            <Button className={classes.MuiButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                --
        </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onChange={(e) => handleDPickerChange(e.target.value)}
            >

                {fetchedPicker.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}

            </Menu>
        </div>

    )
}

export default Picker;

/*

export default function Picker() {
    const useStyles = makeStyles((theme) => ({

        MuiButton: {
            minWidth: '0px'
        }
    }));
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button className={classes.MuiButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                +
        </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
*/