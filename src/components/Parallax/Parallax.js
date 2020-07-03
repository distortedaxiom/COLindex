import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from '../../style/ParallaxStyle'

const useStyles = makeStyles(styles);

export default function Parrallax(props) {

    const classes = useStyles();

    return (
        <div
            className={classes.parallax}
            style={{
                backgroundImage: "url(" + props.image + ")",
            }}>
        </div>
    )

}
