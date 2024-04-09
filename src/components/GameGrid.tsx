import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardCaontainer from "./CardCaontainer";





const GameGrid = () => {
  const {data,error,loading}=useGames();
  const skeletons=[1,2,3,4,5,6,7,8];
  if (error) return <Text>{error}</Text>
  return (

    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
        
        {loading && skeletons.map((skeleton)=><CardCaontainer><CardSkeleton key={skeleton}/></CardCaontainer>) }
        {data.map((d)=>{
            return <CardCaontainer><GameCard key={d.id} game={d}/></CardCaontainer>;
        })}
        
      
      
    </SimpleGrid>
  );
};

export default GameGrid;