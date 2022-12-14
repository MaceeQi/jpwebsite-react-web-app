import React, {useEffect, useState} from "react";
import "./index.css";

const CarouselComponent = () => {
    const data = ["drink1.jpeg", "dine-in.jpeg"];
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {carouselInfiniteScroll()}, 10000);

        // clean up function
        return () => clearInterval(interval);
    })

    return (
        <div className="jp-carousel-container">
            {
                data.map((item, index) => {
                    return <img className="jp-carousel-item"
                                style={{transform: `translate(-${currentIndex * 100}%)`}}
                                key={index}
                                src={`/images/${item}`}/>
                })
            }
        </div>


        // <div id="carouselExampleIndicators" className="carousel slide p-5" data-bs-ride="carousel">
        //     <div className="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleIndicators"
        //                 data-bs-slide-to="0" className="active" aria-current="true"
        //                 aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleIndicators"
        //                 data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleIndicators"
        //                 data-bs-slide-to="2" aria-label="Slide 3"></button>
        //     </div>
        //     <div className="carousel-inner jp-carousel-size">
        //         <div className="carousel-item active">
        //             <img src={require("../../images/drink1.jpeg")} className="d-block w-100" alt="..."/>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={require("../../images/dine-in.jpeg")} className="d-block w-100" alt="..."/>
        //         </div>
        //         <div className="carousel-item">
        //             <img src="..." className="d-block w-100" alt="..."/>
        //         </div>
        //     </div>
        //     <button className="carousel-control-prev" type="button"
        //             data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button"
        //             data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>
    );
};
export default CarouselComponent;