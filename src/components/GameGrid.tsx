import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardCaontainer from "./CardCaontainer";
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";
interface Genre{
    id:number,
    name:string,
    image_background:string,
    
}

interface Props{
 gameQuery: GameQuery;
}



const GameGrid = ({gameQuery}:Props) => {
  const {data,error,loading}=useGames(gameQuery);

  const skeletons=[1,2,3,4,5,6,7,8];
  if (error) return <Text>{error}</Text>
  return (

    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
        
        {loading && skeletons.map((skeleton)=><CardCaontainer  key={skeleton}><CardSkeleton/></CardCaontainer>) }
        {data.map((d)=>{
            return <CardCaontainer key={d.id}><GameCard  game={d}/></CardCaontainer>;
        })}
        
      
      
    </SimpleGrid>
  );
};

export default GameGrid;