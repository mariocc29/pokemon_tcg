import { Button } from "@/atoms/Button/Button"

export const Main = () => {

  const handleClick = () => {
    console.log('xxx')
  }

  return (
    <div>
      <Button onClick={handleClick}>
        Hola mundo
      </Button>
    </div>
  )
}
