import styles from '../styles.module.css';

export default function PaginationList({totalPages, currentPage, handleSelectedPage}) {
    return (
    <div>
      {[...Array(totalPages)].map((_, index) => {
        return <button 
          onClick={()=>{handleSelectedPage(index+1)}}
          key={index}
          className={styles.pageNumber}
          disabled={index+1 === currentPage}
        >{index+1}</button>
      })}
    </div>
    )
}