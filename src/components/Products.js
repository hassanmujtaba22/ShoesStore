import React from 'react'
import { Link } from "react-router-dom"
import data from "../data/data"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Columns from "react-columns"

const useStyles = makeStyles({
    root: {
        margin: "10px",
    },
    card: {
        margin: "5px",
        "&:hover": {
            backgroundColor: "none",
        },
    },
    CardMedia:{
        height: "100%"
    },
    title: {
        color: "red",
        fontFamily: "'Ubuntu', sans-serif",
        fontWeight: "bold",
        textDecoration: "none",
        "&:hover" : {
            textDecoration: "none",
        }
    },
    price: {
        fontFamily: "'Ubuntu', sans-serif",
        color: "red",
        fontWeight: "bold"
    }
});




function Products() {
    const classes = useStyles();
    var queries = [{
        columns: 2,
        query: 'min-width: 500px'
      }, {
        columns: 3,
        query: 'min-width: 1000px'
      }];

      var dimensions = [
        { width:800, height: 1200 },
        { width: 800, height: 600 },
        { width: 800, height: 800 },
        { width: 800, height: 600 },
        { width: 800, height: 1200 },
        { width: 800, height: 600 },
        { width: 800, height: 400 },
        { width: 800, height: 400 },
        { width: 800, height: 400 },
        { width: 800, height: 800 },
      ];
    return (
        <>
            <Columns className={classes.root} queries={queries} dimensions={dimensions}>
                {Object.entries(data.shoes).map(([slug, { name, img, price }]) => (
                <Card className={classes.card}>
                        <CardActionArea>
                            <Link className={classes.title} to={`/products/${slug}`}>
                                <CardMedia className={classes.CardMedia} component="img" alt={name} height="140" image={img} title={name} />
                                <CardContent>
                                    <Typography className={classes.title} gutterBottom variant="h6" component="h6">
                                        {name}
                                    </Typography>
                                    <Typography className={classes.price} gutterBottom variant="p" component="p">
                                        {price}
                                    </Typography>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                        <CardActions>
                        </CardActions>
                </Card>
                ))}
                {/* <Grid item xs={12} sm={12}>

                </Grid> */}
            </Columns>
        </>
    )
}

export default Products