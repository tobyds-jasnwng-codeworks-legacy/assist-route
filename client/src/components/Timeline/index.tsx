import { Chrono } from 'react-chrono';
import styles from './index.module.css';
const students = ['Sunny Anter', 'Sam Polge', 'Tekraj Gurang', 'Gerry Steffan'];


function Timeline () {
  return (
    <div className={styles.container}>
      <Chrono
        items={items}
        toolbarPosition="BOTTOM"
        disableToolbar="false"
        mode="HORIZONTAL"
        itemWidth={300}
        showAllCardsHorizontal
        cardHeight={300} 
        cardWidth={300}
        timelinePointDimension={40}
        fontSizes={{
          cardSubtitle: '1.5rem',
          cardText: '1.5rem',
          cardTitle: '1.5rem',
          title: '2.5rem',
        }}
        theme={{
          primary: '#4dabf7',
          secondary: 'none',
          titleColor: '#677078',
          titleColorActive: '#4dabf7',
          cardBgColor: '#4dabf7',
          cardTitleColor: 'white',
          cardDetailsColor: 'white',
          toolbarBgColor: 'none',
          toolbarBtnBgColor: 'white',
          toolbarTextColor: 'black',
        }}
      >
      </Chrono>
    </div>
  );
}

const items = [
  
  {
    title: 'Stop 1',
    cardTitle: 'Stop 1 Students',
    cardSubtitle: `${students[0]}`,
  },
  {
    title: 'Stop 2',
    cardTitle: 'Stop 2 Students',
    cardSubtitle: `${students[1]} ${students[2]}`,
  },
  {
    title: 'Stop 3',
    cardTitle: 'Stop 3 Students',
    cardSubtitle: `${students[0]} ${students[2]}`,
  },
  {
    title: 'Stop 4',
    cardTitle: 'Stop 4 Students',
    cardSubtitle: `${students[2]} ${students[1]}`,
  },
  {
    title: 'Stop 5',
    cardTitle: 'Stop 5 Students',
    cardSubtitle: `${students[0]} ${students[1]}`,
  },
  {
    title: 'Stop 6',
    cardTitle: 'Stop 6 Students',
    cardSubtitle: `${students[2]} ${students[0]}`,
  },
  
];
  
  

export default Timeline;