import React, { useEffect, useState } from 'react';
import { getDataByKey } from '../utils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    const banners = getDataByKey('Hero Banner')
    const posters = banners.map((banner) => {
      let thumbnails = banner?.thumbnails
      const thumbnailsArray = Object.values(thumbnails);

      const firstThumbnail = thumbnailsArray[0];
      return firstThumbnail.url;
    })

    setBanners([...posters])
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
      <div className='banner-container'>
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <img className="image-cont"  src={banner} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default Main;
