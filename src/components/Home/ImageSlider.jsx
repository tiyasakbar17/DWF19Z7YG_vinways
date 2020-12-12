import React from 'react'
import Slider from 'react-slick';


function ImageSlider({ imgs }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true
    };


    return (
        <Slider {...settings}>
            {imgs.map((img, i) => {
                i += 1;
                return (<div key={i + 1} className="slideBox">
                    <img className='slider' src={`http://localhost:3001/uploads/img/${img.thumbnail}`} alt='Slider' />
                </div>)
            })}
        </Slider>
    )
}

export default React.memo(ImageSlider)
