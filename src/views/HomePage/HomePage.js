import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from '../../components/Header/Header'
import Parrallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import ActionContainer from '../../components/Parallax/ActionContainer'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import cityscape from '../../assets/images/cityscape.png'

import styles from '../../style/Components'
import ActionStyle from "../../style/Parrallax/ActionContainerStyle";

export default function HomePage(props) {

    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <div>
            <Header />
            <Parrallax image={require('../../assets/images/bg.jpeg')}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Cost of Living Index</h1>
                                <h3 className={classes.subtitle}>
                                    Compare wages and cost in cities across the United States
                                </h3>
                                <div className={classes.CTAbtnContainer}>
                                    <Button size="large" variant="outlined" className={classes.CTAbtn}>
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parrallax>
            <GridItem className={classes.homePageBulletsContainer}>
                <div className={classes.homePageBullets}>
                    <Card className={classes.cardRoot}>
                        <div>
                            <img src={cityscape} />
                        </div>
                    </Card>
                    <Card className={classes.cardRoot}>
                        <div>
                            <h2>Item 1</h2>
                        </div>
                    </Card>
                    <Card className={classes.cardRoot}>
                        <div>
                            <h2>Item 1</h2>
                        </div>
                    </Card>
                </div>
            </GridItem>
        </div>
    )
}
