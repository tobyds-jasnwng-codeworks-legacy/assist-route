import styles from './index.module.css';
import busImage from '../../assets/yellow-bus.svg';
// import busLogo from '../../assets/AssistRouteLogo.png';

function BusImage () {
  return (
    <div className={styles.imageContainer}>
      <img src={busImage}></img>
    </div>
  );
}


export default BusImage;
