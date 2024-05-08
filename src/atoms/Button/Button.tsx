import { useCallback, useState } from 'react'
import './Button.styles.scss'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  btnClass?: string;
  animateOnClick?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, btnClass = 'btn-default', animateOnClick = 'true' }) => {
  const [pressed, setPressed] = useState(false)

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick()
    }

    if (animateOnClick) {
      setPressed(true)
      setTimeout(() => setPressed(false), 1000)
    }
  }, [onClick])

  return(
    <>
      <button className={`btn ${btnClass}`} onClick={handleClick}>
        { !pressed && <span>{ children }</span> }
        
        { pressed && <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" fill="none" r="12" className={pressed && 'fill-in'} />
          <rect width="10" height="10" fill="none" x="19" y="19" rx="2" ry="2" />
        </svg> }
      </button>
    </>
  )
}
