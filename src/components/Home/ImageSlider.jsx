import React from 'react'
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';


function ImageSlider({ imgs }) {

    const history = useHistory()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true
    };

    const clickHandler = (id) => {
        history.push(`/artist/${id}`)
    }


    return (
        <Slider {...settings}>
            {imgs.map((img, i) => {
                i += 1;
                return (<div key={i + 1} className="slideBox">
                    <img className='slider' src={img.thumbnail} alt='Slider' onClick={() => clickHandler(img.artistId)} />
                </div>)
            })}
        </Slider>
    )
}

export default React.memo(ImageSlider)
