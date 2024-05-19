import React from 'react'
import {Link} from 'react-router-dom';
import Ckratos1 from './Ckratos1';
import Ckratos2 from './Ckratos2';
import Ckratos3 from './Ckratos3';
import Ckratos4 from './Ckratos4';
import Ckratos5 from './Ckratos5';
import Ckratos6 from './Ckratos6';
import Ckratos7 from './Ckratos7';

const Navigation = () => {

  return (
        <div id="carouselExampleControls" class='carousel slide' data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <Link to="/ckratos1">
                <figure>
                    <Ckratos1/>
                    <figcaption>Kratos1</figcaption>
                </figure>
            </Link>
            </div>
            <div class="carousel-item">
            <Link to="/ckratos2">
                <figure>
                    <Ckratos2/>
                    <figcaption>Kratos2</figcaption>
                </figure>
            </Link>
            </div>
            <div class="carousel-item">
            <Link to="/ckratos3">
                <figure>
                    <Ckratos3/>
                    <figcaption>Kratos3</figcaption>
                </figure>
            </Link>
            </div>
            <div class="carousel-item">
            <Link to="/ckratos4">
                <figure>
                    <Ckratos4/>
                    <figcaption>Kratos4</figcaption>
                </figure>
            </Link>
            </div>
            <div class="carousel-item">
            <Link to="/ckratos5">
                <figure>
                    <Ckratos5/>
                    <figcaption>Kratos5</figcaption>
                </figure>
            </Link>
            </div>
            <div class="carousel-item">
            <Link to="/ckratos6">
                <figure>
                    <Ckratos6/>
                    <figcaption>Kratos6</figcaption>
                </figure>
            </Link>
            </div>
            <div class="carousel-item">
            <Link to="/ckratos7">
                <figure>
                    <Ckratos7/>
                    <figcaption>Kratos7</figcaption>
                </figure>
            </Link>
            </div> 
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
  )
}

export default Navigation