import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import getNews from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, [isLoading]);

  return (
    <main className={styles.main}>
      {isLoading? <Skeleton count={1} type={'banner'} /> : <NewsBanner item={news[0]}/>}
      {isLoading ? <Skeleton count={6} type={'item'} /> : <NewsList news={news}/>}
    </main>
  )
}
