import styles from './styles.module.css';
import NewsItem from '../NewsItem/NewsItem';

export default function NewsList({news}) {
  return (
    <ul className={styles.list}>
      {news.map((item, index) => {
        return index > 1 ? <NewsItem key={item.id} item={item} /> : null;
      })}
    </ul>
  )
}
