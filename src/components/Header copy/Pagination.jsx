import PaginationList from '../Paginations/PaginationList/PaginationList';
import styles from './styles.module.css';

export default function Pagination({handleNextPage, handlePrevPage, handleSelectedPage, totalPages, currentPage}) {
  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrevPage}
        className={styles.arrow}
        disabled={currentPage === 1}
      >{'<'}</button>
      <PaginationList 
        totalPages={totalPages}
        currentPage={currentPage}
        handleSelectedPage={handleSelectedPage}
      />
      <button 
        onClick={handleNextPage}
        className={styles.arrow}
        disabled={currentPage === totalPages}
      >{'>'}</button>
    </div>
  )
}
