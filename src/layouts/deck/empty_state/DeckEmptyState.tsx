import { useNavigate } from 'react-router-dom';

import pokeball from '/@assets/images/pokeball_open.svg'
import { Button } from '/@shared/button/Button'
import './deck_empty_state.scss'

export const DeckEmptyState = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/deck/new');

  return(
    <>
      <section className='empty_state'>
        <main>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-lg-4 pokeball'>
              <img src={ pokeball } alt="Pokeball Opened" />
            </div>
          </article>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-lg-4'>
              <h1>Your deck awaits</h1>
            </div>
          </article>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-lg-4 message'>
              Add cards to your deck based on their type, and they will magically appear here.
            </div>
          </article>
        </main>

        <footer>
          <div className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-lg-4'>
              <Button onClick={handleClick}>
                Forge your first PokeDeck here
              </Button>
            </div>
          </div>
        </footer>
      </section> 
    </>
  )
}