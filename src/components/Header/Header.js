import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'


import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import styles from '../../style/HeaderStyle'

const useStyles = makeStyles(styles);

export default function Header(props) {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.container}>
            <Button className={classes.title} variant="h6">
                COL Index
            </Button>
            <Grid>
                <Link to='/dashboard'>
                <Button color="inherit">
                    Dashboard
                </Button>
                </Link>
                <Button color="inherit">
                    Login
                </Button>
                <Button color="inherit">
                    About
                </Button>
            </Grid>
            </Toolbar>
        </AppBar>
    )
}
