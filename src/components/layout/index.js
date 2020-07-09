import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({
    main: {
        margin: "0px",
        padding: "0px",
    },
    box: {
        height: "auto",
    }
}))

function Layout({ children }) {
    const classes = useStyle()
    return (
        <Grid className={classes.main}>
            <Grid item>
                <Header />
            </Grid>
            <Container>
            <Grid container item className={classes.box}>
                {children}
            </Grid>
            </Container>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
}

export default Layout
