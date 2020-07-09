import React from 'react';
import './imageList.css';
import ImageCard from './imageCard';

const ImageList = (props) => {
  const images = props.images.map((image, index) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image"> {images}</div>;
};
export default ImageList;
