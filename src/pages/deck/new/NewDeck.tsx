import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button, CardType } from '@/shared'
import { createDeck } from '@/services';
import { toggleModal } from '@/state';
import './new_deck.scss'

export const NewDeck = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [collectionName, setCollectionName] = useState<string>('');
  const [types, setTypes] = useState<Array<string>>([]);
  const { getItem } = useLocalStorage('types')
  const dispatch = useDispatch();

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const handleCollectionNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollectionName(event.target.value);
  };

  const handleSubmit = () => {
    if (!collectionName || !selectedType) {
      dispatch(
        toggleModal({
          show: true, 
          status: 'alert', 
          message: 'Collection name and type must be selected',
        })
      )
      return;
    }
  
    createDeck({
      label: collectionName,
      category: selectedType
    }).then((_: AxiosResponse<any>) => {
      dispatch(
        toggleModal({
          show: true, 
          status: 'success', 
          message: 'Your deck was created successfully',
        })
      )
    })
    .catch((_: AxiosResponse<any>) => {
      dispatch(
        toggleModal({
          show: true, 
          status: 'alert', 
          message: 'Something went wrong, please try again',
        })
      )
    });
  }

  useEffect(() => {
    setTypes( getItem() );
  }, []);

  return (
    <>
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
              <Button onClick={handleSubmit}>
                Gotta save 'em all!
              </Button>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}