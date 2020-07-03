import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from '../../components/Header/Header'
import Parrallax from '../../components/Parallax/Parallax'

export default function HomePage(props) {

    return (
        <div>
            <Header />
            <Parrallax />
        </div>
    )
}
