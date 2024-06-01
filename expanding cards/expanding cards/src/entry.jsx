import React from 'react';

const ImageCard = ({ imageUrl }) => {
return (
    <div className="image-card" style={{backgroundImage: `url(${imageUrl})`}}>
    </div>
);
}

export default ImageCard;
