import { useEffect, useState } from 'react';
import './InputRadio.styles.scss'

interface InputRadioProps {
  isSelected: boolean;
  inputClass?: string;
}

export const InputRadio: React.FC<InputRadioProps> = ({ isSelected, inputClass = 'default'}) => {
  const [selected, setSelected] = useState<boolean>(isSelected);

  const handleClick = () => {
    setSelected(!selected)
  };

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected]);
  
  return(
    <>
      <label className="checkmark-container">
        <input type="radio" checked={selected} onChange={handleClick}/>
        <div className='checkmark-frame'>
          <div className={`checkmark checkmark-${inputClass}`}></div>
        </div>
      </label>
    </>
  )
}
