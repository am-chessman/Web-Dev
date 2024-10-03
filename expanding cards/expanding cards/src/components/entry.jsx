import React from 'react';

const ImageCard = ({ imageUrl, isExpanded, onClick }) => {
    const width = isExpanded ? 30 : 4.5;
    const cardClass = isExpanded ? 'image-card animated-border' : 'image-card';

    return (
        <div 
            className={cardClass}
            onClick={onClick} 
            style={{ 
                backgroundImage: `url(${imageUrl})`, 
                width: `${width}%`, 
                height: '50%', // Adjust the height as needed
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: 'width 0.3s ease'
            }}
        >
        </div>
    );
};

export default ImageCard;
