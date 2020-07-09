import React from 'react'
import { useParams } from "react-router-dom"
import data from "../data/data"
import { Link } from "react-router-dom"
import { Container, Typography, CardMedia, Card } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Products from './Products'

function ProductDetail() {

    const useStyles = makeStyles({
        root: {
            margin: "10px",
        },
        card: {
            width: "70%",
            margin: "5px",
            "&:hover": {
                backgroundColor: "none",
            },
        },
        CardMedia: {
            width: "100%",
            height: "100%",
        },
        title: {
            color: "red",
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: "bold",
            fontSize: "2rem",
            textDecoration: "none",
            "&:hover": {
                textDecoration: "none",
            }
        },
        price: {
            fontFamily: "'Ubuntu', sans-serif",
            color: "red",
            fontWeight: "bold"
        },
        "@media screen and (min-width: 0px) and (max-width: 600px)": {
            CardMedia: {
                width: "100%",
                height: "100%",
            }   
        }
    });

    const classes = useStyles()

    const { slug } = useParams()
    const shoe = data.shoes[slug]

    if (!shoe) {
        return (
        <div className="productNotFount"><h1>Product Not Found</h1></div>
        )
    }
    const { name, img, price } = shoe
    return (
        <>
            <Link to="/products">Back</Link>
            <Container>
                <Card>
                    <Typography className={classes.title} variant="h4" component="h4">{name}</Typography>
                    <CardMedia className={classes.CardMedia} component="img" alt={name} height="140" image={img} title={name} />
                    <Typography className={classes.price} variant="h4" component="h4">{price}</Typography>
                </Card>
                <hr/>
                <Products/>
            </Container>
        </>
    )
}

export default ProductDetail
