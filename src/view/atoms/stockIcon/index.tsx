/**
 * 
 * Stock Icon component
 * @author - Faizal 
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';

// STYLE IMPORT
import './styles.css';

type StockIconProps = {
  value: number;
  isSmallSize?: boolean
}
const StockIcon = ({
  value,
  isSmallSize = false
}: StockIconProps) => {
  return (
    <>
      {value < 0 ? <div className={clsx('negative-stock', isSmallSize && 'stock-value-small')}>{value}%&nbsp;<i className="fa fa-arrow-down" aria-hidden="true"></i></div>
      : <div className={clsx('positive-stock', isSmallSize && 'stock-value-small')}>{value}%&nbsp;<i className="fa fa-arrow-up" aria-hidden="true"></i></div>}
    </>
  )
}

export default StockIcon;