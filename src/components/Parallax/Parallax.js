import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from '../../style/Parrallax/ParallaxStyle'

const useStyles = makeStyles(styles);

export default function Parrallax(props) {

    const classes = useStyles();

    const parallaxClasses = classNames({
        [classes.parallax]: true,
    });

    const { filter, className, children, style, image, small } = props;

    return (
        <div
            className={parallaxClasses}
            style={{
                backgroundImage: "url(" + props.image + ")",
            }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute', top: '0', width: '100%', height: '100%' }}>
            </div>
            {children}
        </div>
    )

}
