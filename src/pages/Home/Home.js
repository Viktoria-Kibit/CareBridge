import React from 'react';
import PetStories from '../../components/PetStories/PetStories';  // імпортуемо компонент

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <PetStories />  {/* Вставляемо компонент PetStories */}
    </div>
  );
};

export default Home;
