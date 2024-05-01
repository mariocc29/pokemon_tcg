import { useNavigate } from 'react-router-dom';

import pokemonLogo from '/@assets/images/logo.svg'
import pokeball from '/@assets/images/pokeball.svg'
import './header.scss'

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');
  
  return(
    <>
      <header>
        <div className='pokeball'>
          <img src={ pokeball } alt='Go Home!' onClick={handleClick}/>
        </div>
        <div className='brand'>
          <img src={ pokemonLogo } />
        </div>
      </header>
    </>
  )
}