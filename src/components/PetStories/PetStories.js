import React, { useState } from 'react';
import PetStoryCard from './PetStoryCard';
import styles from './PetStories.module.css';
import Barni1 from '../assets/Barni1.png';
import Barni2 from '../assets/Barni2.png';
import Author1 from '../assets/Author1.png';


// const PetStories = () => {

//     const [stories] = useState([
//         {
        
//         },
//         {
        
//         },
//       ]);
    



// };
const stories = [
  {
    id: 1,
    title: 'Барні - з ланцюга в обійми',
    images: [Barni1, Barni2],
    story: 'Барні багато років жив на покинутому подвір\'ї...',
    authorAvatar: [Author1],
    date: '13.02.2025'

  },
  {
    id: 2,
    title: 'Барні - з ланцюга в обійми',
    images: [Barni1, Barni2],
    story: 'Барні багато років жив на покинутому подвір\'ї...',
    authorAvatar: [Author1],
    date: '13.02.2025'
  }
];

const PetStories = () => {
  const [visibleStories, setVisibleStories] = useState(1);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Pet Stories</h1>
      {stories.map(story => (
        <PetStoryCard key={story.id} {...story} />
      ))}
    </div>
  );
};

export default PetStories;