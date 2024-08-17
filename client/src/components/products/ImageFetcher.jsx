import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const ImageFetcher = ({ filename }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
        console.log(filename);
      try {
        const response = await axios.post('/api/products/image', { filename }, {
          responseType: 'blob',
        });

        const imageUrl = URL.createObjectURL(response.data);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error fetching the image:', error);
      }
    };

    fetchImage();

  }, []);

  return (
    <div>
      {imageSrc ?  <Card.Img variant="top" src={imageSrc} alt={filename} /> : <p>Loading image...</p>}
    </div>
  );
};

export default ImageFetcher;
