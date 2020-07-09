import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "red",
        padding: "0.2rem",
    },
    footer: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontFamily: "'Ubuntu', sans-serif",
    }
}))

function Footer() {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography className={classes.footer} variant="h6">
                Made with <span role="img" aria-labelledby>❤️</span> Hassan Mujtaba.
            </Typography>            
        </Box>
    )
}

export default Footer
