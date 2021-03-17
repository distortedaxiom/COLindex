

const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "10vw",
    width: "100%"
};

const container = {
    ...containerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1140px"
    }
};

const brand = {
    color: "#FFFFFF",
    textAlign: "left"
}

const title = {
    color: "white",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "3rem",
    fontfamily: `'Roboto Slab', serif`
}

const subtitle = {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
}

const CTAbtnContainer = {
    marginTop: "1rem"
}

const CTAbtn = {
    backgroundColor: "white",
    color: "black",
}

const homePageBulletsContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
}

const homePageBullets = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    marginTop: "5%"
}

const cardRoot = {
    minWidth: 275,
    minHeight: 200,
    marginLeft: "2rem"
}

const cardImg = {
    height: 200,
}

const cardText = {
    textAlign: 'center'
}

export default {
    container,
    brand,
    title,
    subtitle,
    CTAbtnContainer,
    CTAbtn,
    homePageBulletsContainer,
    homePageBullets,
    cardRoot,
    cardImg,
    cardText
};
