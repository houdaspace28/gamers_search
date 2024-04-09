import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import CardSkeleton from "./CardSkeleton";





const GameGrid = () => {
  const {games,error,loading}=useGames();
  const skeletons=[1,2,3,4,5,6];
  if (error) return <Text>{error}</Text>
  return (

    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
       {loading && skeletons.map((skeleton)=><CardSkeleton key={skeleton}/>) }
        {games.map((game)=>{
            return <GameCard key={game.id} game={game}/>
        })}
      
    </SimpleGrid>
  );
};

export default GameGrid;