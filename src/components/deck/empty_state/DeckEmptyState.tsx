import pokeball from '/pokeball_open.svg'
import './deck_empty_state.scss'
import { Button } from '../../../shared/button/Button'

export const DeckEmptyState = () => {
  return(
    <>
      <section className='empty_state'>
        <main>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 pokeball'>
              <img src={ pokeball } alt="Pokeball Opened" />
            </div>
          </article>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
              <h1>Your deck awaits</h1>
            </div>
          </article>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 message'>
              Add cards to your deck based on their type, and they will magically appear here.
            </div>
          </article>
        </main>

        <footer>
          <div className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
              <Button />
            </div>
          </div>
        </footer>
      </section> 
    </>
  )
}