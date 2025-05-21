import React from 'react'

const Crousel = () => {
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/banner.png" alt="Carousel Image" />
                    <div className="carousel-caption">


                    </div>
                </div>

                <div className="carousel-item">
                    <img src="img/banner2.png" alt="Carousel Image" />
                    <div className="carousel-caption">

                    </div>
                </div>

                <div className="carousel-item">
                    <img src="img/banner3.png" alt="Carousel Image" />
                    <div className="carousel-caption">

                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Crousel
