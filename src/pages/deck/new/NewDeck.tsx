import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';

import { useLocalStorage } from '/@hooks/useLocalStorage';
import { Button } from '/@shared/button/Button'
import { CardType } from '/@shared/card_type/CardType';
import { createDeck } from '/@services/decksService';
import { toggle } from '/@state/modal/modalSlice';
import './new_deck.scss'

export const NewDeck = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [collectionName, setCollectionName] = useState<string>('');
  const [types, setTypes] = useState<Array<string>>([]);
  const { getItem } = useLocalStorage('types')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const handleCollectionNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollectionName(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(toggle({show: true, status: 'success', message: 'Your deck was created successfully'}))
    
    // if (!collectionName || !selectedType) {
    //   console.error('Collection name and type must be selected');
    //   return;
    // }
  
    // createDeck({
    //   label: collectionName,
    //   category: selectedType
    // }).then((_: AxiosResponse<any>) => {
    //   navigate('/')
    // })
    // .catch((error: AxiosResponse<any>) => {
    //   console.error(error);
    // });
  }

  useEffect(() => {
    setTypes( getItem() );
  }, []);

  return (
    <>
      <form onSubmit={ (event) => onSubmit(event) }>
        <section className='form'>
          <main>
            <article className='row'>
              <div className='col-sm-12 col-md-8 offset-md-2 title'>
                Create your deck of a given type:
              </div>
            </article>
            <article className='row'>
              <div className='col-sm-12 col-md-8 offset-md-2'>
                <input 
                  type='text' 
                  placeholder='Input your name collection'
                  value={collectionName} 
                  onChange={handleCollectionNameChange} />
              </div>
            </article>
            <article className='row'>
              <div className='col-sm-12 col-md-8 offset-md-2'>
                <div className='cards'>
                  {
                    types.map(type => (
                      <CardType 
                        key={type} 
                        kindOf={type} 
                        isSelected={selectedType === type} 
                        onClick={() => handleTypeClick(type)} />
                    ))
                  }
                </div>
              </div>
            </article>
          </main>

          <footer>
            <div className='row'>
              <div className='col-sm-12 col-md-8 offset-md-2 align-center'>
                <Button>Gotta save 'em all!</Button>
              </div>
            </div>
          </footer>
        </section>
      </form>
    </>
  )
}