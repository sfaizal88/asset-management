/**
 * 
 * Chip component
 * @author - Faizal 
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';

// UTILS IMPORT
import {AssetEnum} from '../../../utils/enum';

// STYLE IMPORT
import './styles.css';

type ChipProps = {
  label: AssetEnum;
}

const Chip = ({
  label,
}: ChipProps) => {
  // DECLARE COLOR
  const ChipClass = {
    [AssetEnum.STOCK]: 'red-chip',
    [AssetEnum.CRYPTO]: 'yellow-chip',
    [AssetEnum.PROPERTY]: 'green-chip',
  }
  return (
    <div className={clsx("chip-container", ChipClass[label])}>{label}</div>
  )
}

export default Chip;