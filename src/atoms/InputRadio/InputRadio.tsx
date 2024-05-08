import { useState } from 'react';
import './InputRadio.styles.scss'

interface InputRadioProps {
  onClick: () => void;
  isSelected: boolean;
  inputClass?: string;
}

export const InputRadio: React.FC<InputRadioProps> = ({ onClick, isSelected, inputClass = 'default'}) => {
  const [selected, setSelected] = useState<boolean>(isSelected)

  const handleClick = () => {
    setSelected(!selected)
    onClick()
  }
  
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
