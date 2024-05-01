import './button.scss'

interface ButtonProps {
  btnClass: string;
}

export const Button: React.FC<ButtonProps> = ({ btnClass = 'btn-info' }) => {
  return(
    <>
      <button className={`btn ${btnClass}`}>
        Click me
      </button>
    </>
  )
}