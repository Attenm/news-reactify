import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import getNews from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Paginations/Pagination/Pagination';

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  useEffect(()=>{
    const fetchNews = async (currentPage) => {
      try {
        const response = await getNews(currentPage, pageSize);
        setNews(response.news);
        setIsLoading(false);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if(currentPage<totalPages){
      setCurrentPage(prev => prev + 1);
    }
  }

  const handlePrevPage = () => {
    if(currentPage > 1){
      setCurrentPage(prev => prev - 1);
    }
  }

  const handleSelectedPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <main className={styles.main}>
      {isLoading ? <Skeleton count={1} type={'banner'} /> : <NewsBanner item={news[0]}/>}
      <Pagination
        {
          ...{handleNextPage, 
            handlePrevPage, 
            handleSelectedPage,
            totalPages,
            currentPage
        }
      }
      />
      {isLoading ? <Skeleton count={6} type={'item'} /> : <NewsList news={news}/>}
      <Pagination
        {
          ...{handleNextPage, 
            handlePrevPage, 
            handleSelectedPage,
            totalPages,
            currentPage
        }
      }
      />
    </main>
  )
}
