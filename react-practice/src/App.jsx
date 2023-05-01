import React, { useState, Suspense, useRef } from 'react';
import './App.css'

function App() {
  const [sendValue, setSendValue] = useState("");
  const ref = useRef();

  function onSubmit(e) {
    e.preventDefault();
    setSendValue(`https://pixabay.com/api/?key=14919223-67c3fc77912b6510ce2064aa6&q=${ref.current.value}&image_type=photo`)
  }

  const ImageGallery = React.lazy(()=> import('./components/ImageGallery'));

  return (
    <div className='content-wrapper'>
      <div className='form-container'>
        <h1>My Pixabay</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type='text' ref={ref} />
        </form>
      </div>
      <Suspense fallback={<p>検索中...</p>}>
        <ImageGallery value={sendValue} />
      </Suspense>
    </div>
  )
}

export default App
