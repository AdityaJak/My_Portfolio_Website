// ImageGallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageGallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const API_KEY = 'jJIoVAYYb0IqFzhp38KhJUpQ1HyP24RF4AibGfWz6NY'; // Replace with your Unsplash API key

  useEffect(() => {
    // Make an API request to Unsplash to get a collection of images
    axios
      .get(`https://api.unsplash.com/photos/random?count=6&client_id=${API_KEY}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images from Unsplash:', error);
      });
  }, [API_KEY]);

  return (
    <section className="image-gallery">
      <h2>Image Gallery</h2>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.urls.regular} alt={image.alt_description} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
