import React, { useState } from 'react';
import '../App.css';
import ImageCard from './entry';
import imageObjects from '../assets/images';


function App() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {imageObjects.map((image, index) => (
        <ImageCard 
          key={image.id} 
          imageUrl={image.image} 
          isExpanded={index === expandedIndex}
          onClick={() => handleExpand(index)}
        />
      ))}
    </div>
  );
}

export default App;
