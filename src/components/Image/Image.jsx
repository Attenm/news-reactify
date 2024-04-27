import styles from './styles.module.css';

export default function Image({image}) {
  return (
    <div className={styles.wrapper}>
      {image === 'None' ? null : <img src={image} alt="news" className={styles.image}></img>}
    </div>
  )
}
