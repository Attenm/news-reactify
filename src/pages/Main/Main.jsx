import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import getNews from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';

export default function Main() {
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length ? <NewsBanner item={news[0]}/> : null}
      <NewsList news={news}/>
    </main>
  )
}