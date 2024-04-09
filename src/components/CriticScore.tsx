import { Badge } from "@chakra-ui/react"


interface Props{
    score:number,
}

const CriticScore = ({score}: Props) => {
  return (
   score > 75 ? <Badge colorScheme='green'>{score}</Badge> : score > 60 ? <Badge colorScheme='yellow'>{score}</Badge> : score > 30 ? <Badge colorScheme='red'>{score}</Badge> :
   <Badge>{score}</Badge>
  )
}

export default CriticScore