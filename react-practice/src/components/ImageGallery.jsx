import React, { useEffect, useState } from 'react'

function ImageGallery({ value }) {
  const [data, setData] = useState();

  useEffect(()=> {
    fetch(value)
    .then((res) => res.json())
    .then((data)=> setData(data.hits));
  }, [value]);

  return (
    <div className='imageGallery'>
      <div className='imageGallery__list'>
        {data?.map((item)=> (
          <div className='imageGallery__item' key={item.id}>
            <a href={item.pageURL} target='_blank'>
              <img src={item.largeImageURL} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery