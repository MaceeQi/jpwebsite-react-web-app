import React from "react";

const CarouselItem = (photo) => {
    return (
        <div className="carousel-item active">
            <img src={require(`./public/images/${photo.name}`)} className="d-block w-100" alt="..."/>
        </div>
    );
};
export default CarouselItem;