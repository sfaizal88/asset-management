/**
 * 
 * Counter Widget component
 * @author - Faizal 
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT
import { ReactElement } from 'react';

// STYLE IMPORT
import './styles.css';

type CounterWidgetProps = {
    title: string;
    count: string | number;
    icon: ReactElement
}

const CounterWidget = ({
    title,
    count,
    icon
}: CounterWidgetProps) => {
  return (
    <div className="counter-widget-container flex flex-1"> 
      <div className='flex-1 counter-icon'>
        {icon}
      </div>
      <div className='flex-1'>
        <div className='counter-title text-right'>{title}</div>
        <div className='counter-subtitle text-right'>{count}</div>
      </div>
    </div>
  )
}

export default CounterWidget;