/**
 * 
 * Pagination Control component
 * @author - Faizal 
 * @date - 23rd June 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';

// STYLE IMPORT
import './styles.css';

type PaginationControlProps = {
  dataList: any[];
  pageNumbers: number[];
  currentPage: number;
  setCurrentPage: (val: number) => void;
  paginate: (val: number) => void;
  itemsPerPage: number;
}

const PaginationControl = ({
  dataList,
  pageNumbers,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  paginate,
}: PaginationControlProps) => {
  return (
    <div className='pagination'>
        {
            <div className={clsx('page-item', currentPage === 1 && 'page-item-disabled')} onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
        }
        {pageNumbers.map((number) => (
            <div className={clsx('page-item', currentPage === number && 'page-active')} key={`page-no-${number}`} onClick={() => paginate(number)}>
                {number}
            </div>
        ))}
        {
            <div className={clsx('page-item', currentPage === Math.ceil(dataList.length / itemsPerPage) && 'page-item-disabled')} onClick={() => currentPage !== Math.ceil(dataList.length / itemsPerPage) && setCurrentPage(currentPage + 1)}><i className="fa fa-arrow-right" aria-hidden="true"></i></div>
        }
    </div>
  )
}

export default PaginationControl;