import React, { useState } from 'react';
import PetStoryCard from './PetStoryCard';
import styles from './PetStories.module.css';
import Barni1 from '../../assets/Barni1.png';
import Barni2 from '../../assets/Barni2.png';
import Author1 from '../../assets/Author1.png';
import Serzh1 from '../../assets/Serzh1.png';
import Serzh2 from '../../assets/Serzh2.png';
import Author2 from '../../assets/Author2.png';
import Bulka1 from '../../assets/Bulka1.png';
import Bulka2 from '../../assets/Bulka2.png';
import Richik1 from '../../assets/Richik1.png';
import Richik2 from '../../assets/Richik2.png';
import Author3 from '../../assets/Author3.png';


const stories = [
  {
    id: 1,
    title: 'Барні - з ланцюга в обійми',
    images: [Barni1, Barni2],
    story: 'Барні багато років жив на покинутому подвір’ї, прив’язаний до ланцюга, без турботи та любові. Він боявся людей, не знав, що таке ласка.\n Завдяки терпінню волонтерів поступово відкрився — почав довіряти, радів дотику. Тепер Барні — улюбленець великої родини з дітьми, охороняє дім i з радістю грається з малечею. Він знайшов своє місце  світі.',
    authorAvatar: [Author1],
    date: '13.02.2025'

  },
  {
    id: 2,
    title: 'Сєрж. Від кошеняти на заводі до сильного кота',
    images: [Serzh1, Serzh2],
    story: 'Маленьке кошенятко що проживало на території промислового підприємства де на кожному кроці його могла спідкати небезпека виробничого процесу. Оскільки в таких умовах котику було небезпечно лишатись небайдужі люди почали шукати йому прихисток. На цей запит відгукнулась дівчина яка взяла котика до себе. З того часу зростаючи в любові маленьке кошенятко виросло в великого, сильного та одночас спритного кота якого назвали простим французьким іменем Сєрж.',
    authorAvatar: [Author2],
    date: '22.14.2024'
  },
  {
    id: 3,
    title: 'Булка і Річік: Історія порятунку котиків під час війни',
    images: [Bulka1, Bulka2, Richik1, Richik2],
    story: ' Булка і Річік\nДвоє братиків та справжніх представників породи британських короткошерстних що народились через місяць після початку повномаштабного вторгнення у Харкові. Оскільки їх власники проживали в районі активного введення бойових дій у них не було можливості залишити котиків у себе. Тому вони були змушені шукати когось хто прихистить двох братиків. На це зголосились дві пари друзів зі Львова кожна з яких взяли до себе по одному котику. З того часу і по сьогодні Булка та Річік живуть у люблячих родинах у спокої та злагоді.',
    authorAvatar: [Author3],
    date: '03.02.2025'
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