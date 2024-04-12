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
    <Card>
        <Image src={cropImages(game.background_image)}/>
        <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={3}>
        <PlatformIconList platforms={game.parent_platforms.map((p)=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
            <Heading fontSize='2xl'>
                {game.name}
            </Heading>
       
        </CardBody>
        
        
    </Card>
  )
}
 