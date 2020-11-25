import React from 'react'
import Slider from 'react-slick';


function ImageSlider({ imgs }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true
    };


    return (
        <Slider {...settings}>
            {imgs.map(img => (
                <div key={img.id}>
                    <img className='slider' src={img.img} alt='Slider' />
                </div>
            ))}
        </Slider>
    )
}

export default React.memo(ImageSlider)
