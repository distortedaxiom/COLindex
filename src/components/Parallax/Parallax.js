import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from '../../style/ParallaxStyle'

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
                {children}
        </div>
    )

}
