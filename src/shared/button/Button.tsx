import './button.scss'

interface ButtonProps {
  children: React.ReactNode;
  btnClass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ btnClass = 'btn-info', children, onClick }) => {
  return(
    <>
      <button className={`btn ${btnClass}`} onClick={onClick}>
        {children}
      </button>
    </>
  )
}