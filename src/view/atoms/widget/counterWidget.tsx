/**
 * 
 * Counter Widget component
 * @author - Faizal 
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT
import { ReactElement } from 'react';

// OTHER COMPONENT IMPORT
import {StockIcon} from '../';

// UTIL IMPORT
import {calculatePercentageDifference, convertToCurrency} from '../../../utils';
import type {Total} from '../../../utils/types';

// STYLE IMPORT
import './styles.css';

type CounterWidgetProps = {
    title: string;
    icon: ReactElement;
    total?: Total
}

const CounterWidget = ({
    title,
    icon,
    total
}: CounterWidgetProps) => {
  return (
    <div className="counter-widget-container flex flex-1"> 
      <div className='flex-1 counter-icon'>
        {icon}
      </div>
      <div className='flex-1'>
        <div className='counter-title text-right'>{title}</div>
        <div className='counter-subtitle text-right'>
          <div className='whitespace-nowrap flex flex-1 items-center justify-end'>
            {convertToCurrency(total?.currentAssetTotal || 0)}&nbsp;{total && <StockIcon isSmallSize value={calculatePercentageDifference(total.currentAssetTotal, total.currentMarketTotal)}/>}</div>
        </div>
      </div>
    </div>
  )
}

export default CounterWidget;