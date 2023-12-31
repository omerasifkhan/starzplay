import React, { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
// import Movie from './Movie';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { getDataByKey } from '../utils';

const Movie = lazy(() => import('./Movie'));

const Row = ({ title, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const banners = getDataByKey(title)

    const posters = banners.map((banner) => {
      let thumbnails = banner?.thumbnails
      const thumbnailsArray = Object.values(thumbnails);

      const firstThumbnail = thumbnailsArray[0];
      return firstThumbnail?.url;
    })

    setMovies([...posters])

  }, []);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className='text-white font md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Suspense fallback={<div>Loading....</div>} key={id}>
              <Movie key={id} item={item} />
            </Suspense>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
