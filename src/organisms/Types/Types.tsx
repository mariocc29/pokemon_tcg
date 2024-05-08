import { useEffect, useState } from "react"

import { useLocalStorage } from "@/hooks";
import { CardType } from "@/molecules"

interface TypesProps {
  onClick: (type: string ) => void;
}

export const Types: React.FC<TypesProps> = ({ onClick }) => {

  const [selectedType, setSelectedType] = useState<string>('');
  const [types, setTypes] = useState<Array<string>>([]);
  const { getItem } = useLocalStorage('types')

  const handleClick = (type: string) => {
    setSelectedType(type);
    onClick(type);
  };

  useEffect(() => {
    setTypes(getItem() || []);
  }, []);

  return (
    <>
      <div className='cards'>
        {
          types.map(type => (
            <div className='card-sm-6 card-md-4' key={type}>
              <CardType 
                kindOf={type} 
                isSelected={selectedType === type}
                onClick={() => handleClick(type)}/>
            </div>
          ))
        }
      </div>
    </>
  )
}
