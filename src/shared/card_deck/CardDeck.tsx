import DeckData from "/@interfaces/deck_data"
import './card_deck.scss'

export const CardDeck: React.FC<DeckData> = ({ deck }) => {
  return (
    <>
      <div className={`deck deck-${deck.category}`}>
        <div>
          <div>{ deck.label }</div>
          <span className={`caption caption-${deck.category}`}>{ deck.category }</span>
        </div>
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_17_715)" transform="translate(0, -10)">
            <path d="M59.776 43C58.328 52.622 50.026 60 40 60C29.974 60 21.672 52.622 20.224 43H0.112C1.646 63.69 18.918 80 40 80C61.082 80 78.354 63.69 79.888 43H59.776Z"/>
            <path d="M20.23 36.96C21.694 27.358 29.988 20 40 20C50.012 20 58.306 27.356 59.77 36.96H79.886C78.332 16.288 61.068 0 40 0C18.932 0 1.66801 16.288 0.114014 36.96H20.23Z"/>
            <path d="M40 55C48.2843 55 55 48.2843 55 40C55 31.7157 48.2843 25 40 25C31.7157 25 25 31.7157 25 40C25 48.2843 31.7157 55 40 55Z"/>
          </g>
        </svg>
      </div>
    </>
  )
}
