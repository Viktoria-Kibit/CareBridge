import React from 'react';
import styles from './PetStories.module.css';

//Передаватимемо об'єкт з історіями про тварин
// const PetStoryCard = ({story}) => {
//     return (
//         <div className = 'story-card'>
//             <h3>
//                 {story.title}   
//             </h3>
//             <p> <strong>Автор:</strong>{story.author}</p>
//             <p><strong>Дата публікації:</strong>{story.date}</p>
//             <p><strong>Назва історії:</strong>{story.storyName}</p>
//             <div className = 'story-image'>
//                 {story.image.map( (img, index) => (
//                 <img key = {index} src = {img} alt = 'Story Image'/>
                
//                 ))}
//             </div>
//             <p><strong>Історія</strong>{story.petStory}</p>
//             <button>Дивитись ще</button>
//         </div>



//     );
// };
const PetStoryCard = ({ title, images, story, authorAvatar, date }) => {
    return (
      <div className={styles.card}>
        <div className={styles.leftImages}>
          {images.map((img, i) => (
            <img key={i} src={img} alt="pet" className={styles.petImage} />
          ))}
        </div>
        <div className={styles.rightContent}>
          <h2 className={styles.storyTitle}>{title}</h2>
          <p className={styles.storyText}>{story}</p>
          <div className={styles.authorInfo}>
            <img src={authorAvatar} alt="author" className={styles.authorAvatar} />
            <span className={styles.date}>{date}</span>
          </div>
        </div>
      </div>
    );
  };

export default PetStoryCard;