import { useState } from 'react';

import { Button } from '/@shared/button/Button'
import { CardType } from '/@shared/card_type/CardType';
import './new_deck.scss'

export const NewDeck = () => {
  const [selectedType, setSelectedType] = useState('');

  const types = ['colorless', 'darkness', 'dragon', 'fairy', 'fighting', 'fire', 'grass', 'lightning', 'metal', 'psychic', 'water'];

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

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
              <input type='text' placeholder='Input your name collection' />
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
              <Button>
                Gotta save 'em all!
              </Button>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}