import PaginationList from '../PaginationList/PaginationList';
import styles from '../styles.module.css';

export default function Pagination({totalPages, currentPage, handleSelectedPage, handleNextPage, handlePrevPage}) {
    return (
      <div className={styles.pagination}>
        <button 
          onClick={handlePrevPage}
          className={styles.arrow}
          disabled={currentPage <= 1}
        >{'<'}</button>
        <PaginationList
          totalPages={totalPages}
          currentPage={currentPage}
          handleSelectedPage={handleSelectedPage}
        />
        <button
        onClick={handleNextPage}
        className={styles.arrow}
        disabled={currentPage >= totalPages}
        >{'>'}</button>
      </div>
    )
}