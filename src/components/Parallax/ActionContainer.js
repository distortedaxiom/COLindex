import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from '../../style/Parrallax/ActionContainerStyle'

const useStyles = makeStyles(styles);

export default function ActionContainer(props) {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h3>Get started with the app here!</h3>
                <button>Dashboard</button>
            </div>
        </div>
    )
}
