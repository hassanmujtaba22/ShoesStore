import React from 'react'
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles({
    root: {
        height: "86vh",
        width: "50%",
        padding: "10px",
        paddingTop: "50px",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    name: {
        color: "red",
    },
    large: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "200px",
        height: "200px",
        border: "red 4px solid"
    },
})

function About() {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <a className={classes.link} href="https://github.com/hassanmujtaba22/ShoesStore" target="_blank">
                <Typography className={classes.name} variant="p">Github Link: <GitHubIcon /> </Typography>
                <Avatar alt="DP" src="https://scontent.fkhi4-2.fna.fbcdn.net/v/t1.0-1/p160x160/75398402_994101754282704_5207242259753336832_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_eui2=AeH4tiamXrUrNBLWa2fTMO8WEWxWtY8QAzcRbFa1jxADN9XpLM2AKSYzi96fAepZzofCwD-aEptX4q4EFcTbBSiP&_nc_oc=AQlysOG0NeZcXSrefuS9pgIQPCqor5ACAKKomFTb0OHj9Ps-z_XI7zTLuwu5xjn5MM8&_nc_ht=scontent.fkhi4-2.fna&_nc_tp=6&oh=829fa385efdd4e66128bb2864234ab22&oe=5F2DAC31"
                    className={classes.large} />
                <Typography className={classes.name} variant="h3">Hassan Mujtaba</Typography>
            </a>
        </Container>
    )
}

export default About
