import React from 'react'
import { Typography, AppBar, Toolbar, makeStyles, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        color: "black",
        backgroundColor: "white",
    },
    logo: {
        fontWeight: "bold",
        fontFamily: "'Yellowtail', cursive",
        flexGrow: 1,
        color: "red"
    },
    navLink: {
        fontFamily: "'Ubuntu', sans-serif",
        color: "black",
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "red",
        paddingRight: "1rem",
        cursor: "pointer",
        "&:hover": {
            fontWeight: "bolder",
            color: "red",
        }
    },
    navIcon: {
        cursor: "pointer",
        color: "red",
        "&:hover": {
            transform: "rotate(-10deg)",
        }
    }
}))


function Header() {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <AppBar className={classes.nav} position="sticky">
                <Toolbar>
                    {/* <Grid container item> */}
                        <Typography className={classes.logo} variant="h5">
                            SHOES STORE
                        </Typography>
                    {/* </Grid> */}

                    {/* <Grid container item> */}
                    <Typography>
                        <Link to="/" className={classes.navLink} component="button">Home</Link>{" "}
                        <Link to="/products" className={classes.navLink} component="button">Products</Link>{" "}
                        <Link to="/about" className={classes.navLink} component="button">About</Link>
                    </Typography>
                    <ShoppingCartIcon className={classes.navIcon} />
                    {/* </Grid> */}
                </Toolbar>
            </AppBar>
        </Grid>
    )
}

export default Header
