import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useLocalStorage } from '/@hooks/useLocalStorage'
import DeckData from "/@interfaces/deck_data";
import { Button, CardDeck } from '/@shared'
import { toggleDeck } from '/@state';
import './deck_main.scss'

interface DeckMainProps{
  decks: DeckData[]
}

export const DeckMain: React.FC<DeckMainProps> = ({ decks }) => {
  const [types, setTypes] = useState<Array<string>>([]);
  const [displayedDecks, setDisplayedDecks] = useState<Array<DeckData>>(decks);
  const [selectedType, setSelectedType] = useState<string>("Show all");
  const { getItem } = useLocalStorage('types')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleNewClick = () => navigate('/deck/new');

  const handleShowClick = (deck: DeckData) => {
    dispatch(toggleDeck(deck))
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    setTypes(
      getItem().map((type: string) => {
        return type.charAt(0).toUpperCase() + type.slice(1);
      })
    )
  }, []);

  useEffect(() => {
    if (selectedType === "Show all") {
      setDisplayedDecks(decks);
    } else {
      setDisplayedDecks(decks.filter(deck => deck.category === selectedType.toLowerCase()));
    }
  }, [selectedType, decks]);

  return (
    <>
      <section className="decks">
        <header className="title">
          Decks:
        </header>
        <main>
          <article className='select'>
            <select onChange={handleTypeChange} value={selectedType}>
                <option>Show all</option>
                {
                  types.map(type => (
                    <option key={type}>{type}</option>
                  ))
                }
            </select>
            <div className="select-arrow"></div>
          </article>
          <article className="card-decks">
            { 
              displayedDecks.map(deck => (
                <CardDeck 
                  key={deck.id} 
                  deck={deck} 
                  onClick={() => handleShowClick(deck)} />
              )) 
            }
          </article>
        </main>
        <footer className='align-center'>
          <Button onClick={handleNewClick}>
            Forge a new PokeDeck
          </Button>
        </footer>
      </section>
    </>
  )
}
