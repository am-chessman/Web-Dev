// src/App.js
import React from 'react';
import './App.css';
import ImageCard from './entry';

function App() {
  
const imageObjects =  [
  {
      id: 1,
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600"},

  {
      id: 2,
      image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },  
  {
      id: 3,
      image: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
  }, 
      {
      id: 4,
      image: "https://images.pexels.com/photos/454880/pexels-photo-454880.jpeg?auto=compress&cs=tinysrgb&w=600"
  },     
  {
      id: 5,
      image: "https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg?auto=compress&cs=tinysrgb&w=600"
  }, 
]  

  return (
    <div className="App">
      {imageObjects.map((image, index) => (
        <ImageCard key={index} imageUrl={image.image} />
      ))}
    </div>
  );
}

export default App;




