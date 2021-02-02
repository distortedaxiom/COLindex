import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from '../../components/Header/Header'
import Parrallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import ActionContainer from '../../components/Parallax/ActionContainer'

import styles from '../../style/Components'
import ActionStyle from "../../style/Parrallax/ActionContainerStyle";

export default function HomePage(props) {

    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <div>
            <Header />
            <Parrallax image={require('../../assets/images/coolbg2.png')}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Cost of Living Index</h1>
                                <h3 className={classes.subtitle}>
                                    Compare wages and cost in cities across the United States
                        </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <ActionContainer />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parrallax>
        </div>
    )
}
