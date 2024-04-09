import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import {Game} from '../hooks/useGames'
import PlatformIconList from './PlatformsIconsList'
import CriticScore from './CriticScore'
import cropImages from '../services/images'

interface Props{
    game:Game,
    
}

export const GameCard = ({game}: Props) => {
  
  return (
    <Card borderRadius={10} overflow='hidden' width='300px'>
        <Image src={cropImages(game.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl'>
                {game.name}
            </Heading>
        <HStack justifyContent={'space-between'}>
        <PlatformIconList platforms={game.parent_platforms.map((p)=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
        </CardBody>
        
        
    </Card>
  )
}
 