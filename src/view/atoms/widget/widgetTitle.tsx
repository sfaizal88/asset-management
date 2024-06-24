/**
 * 
 * Counter title component
 * @author - Faizal 
 * @date - 19th June 2024
 * 
 */
// STYLE IMPORT
import './styles.css';

// COMPONENT PROPS
type CounterTitleProps = {
    title: string;
    subtitle: string;
}

const CounterTitle = ({
    title,
    subtitle,
}: CounterTitleProps) => {
  return (
    <div className='widget-title-container'>
        <div className="widget-title">{title}</div>
        <div className="widget-subtitle">{subtitle}</div>
    </div>
  )
}

export default CounterTitle;