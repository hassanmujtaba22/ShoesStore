import React from 'react';
import { Container } from "@material-ui/core"
import Products from "./Products"
function Home() {

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://static-01.daraz.pk/p/2ccb6d541685dfc85e0ca04a0e5194c5.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Men casual shoes</h5>
              <p>Rs. 599</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://static-01.daraz.pk/p/86c47293415b46456693c6e3a440307b.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>AS Cricket Rubber Sole Running Shoes CHAMP</h5>
              <p>Rs. 2,200</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://static-01.daraz.pk/p/mdc/a0f07cc825acb984633370ce371934bd.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>White Orange Cricket Shoes - Rubber Sole - MAX</h5>
              <p>Rs. 2,250</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Container>
        <Products />
      </Container>
    </>
  );
}
export default Home