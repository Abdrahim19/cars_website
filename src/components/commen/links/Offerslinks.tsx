import React from 'react';
import { GrStatusGood } from 'react-icons/gr';
import { GrDeliver } from 'react-icons/gr';
import { HiOutlineCurrencyEuro } from 'react-icons/hi';
import styles from '../../../styles/styles';

type Props = {
  type:
    | 'Très bonne affaire'
    | 'Bonne affaire'
    | 'Offre équitable'
    | 'Au-dessus du marché'
    | 'Hors marché'
    | 'Livraison'
    | 'Garantie';

  garantie?: 6 | 12 | 18 | 24;
};

const Offerslinks: React.FC<Props> = (props) => {
  let icon = null;

  switch (props.type) {
    case 'Très bonne affaire' || 'Bonne affaire' || 'Offre équitable':
      icon = <HiOutlineCurrencyEuro className='text-lcui_success' />;
      break;
    case 'Au-dessus du marché': 
      // Add icon component for 'Au-dessus du marché'
      break;
    case 'Garantie':
      icon = <GrStatusGood className='text-lcui_success' />;
      break;
    case 'Hors marché':
      // Add icon component for 'Hors marché'
      break;
    case 'Livraison':
      icon = <GrDeliver className='text-lcui_primary' />;
      break;
    default:
      break;
  }

  return (
    <div className={`border border-gray-400 rounded-xl ${styles.flexitems} gap-2 p-1`}>
      {icon && <span className='inline-block'>{icon}</span>}
      <p className='text-base font-normal'>
        {props.type === 'Garantie' ? `${props.type} ${props.garantie} mois` : props.type}
      </p>
    </div>
  );
};

export default Offerslinks;