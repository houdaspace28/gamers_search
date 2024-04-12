import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery,
}

export const Title = ({gameQuery}:Props) => {
const heading=`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading marginY={5} as='h1' paddingLeft={2} fontSize={'5xl'}>{heading}</Heading>
  )
}
