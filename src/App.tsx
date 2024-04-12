import { useState } from "react"
import {Genre} from './hooks/useGenres'
import {Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from
 './components/NavBar'
import GameGrid from './components/GameGrid'
import  GenreList from './components/GenreList'
import { PlatformsList } from "./components/PlatformsList"
import { Platform } from "./hooks/useGames"
import { SortSelector } from "./components/SortSelector"
import { HStack } from "@chakra-ui/react"

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}



function App() {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg: `"nav nav" "aside main"`,//screens wider tha 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
      >
        <GridItem area='nav' >
           <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
        </GridItem>
        <Show above='lg'>
        <GridItem area='aside' paddingX='5px'>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
        </GridItem>
        </Show>
        <GridItem area='main' justifyContent={'space-around'}>
            <HStack spacing={5} paddingLeft={2}marginBottom={5}>
              <PlatformsList onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})} selectedPlatform={gameQuery.platform}/>
              <SortSelector onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})} sortOrder={gameQuery.sortOrder}/>
            </HStack>
            <GameGrid gameQuery={gameQuery}/>
        </GridItem>

      </Grid>
    </>
  )
}

export default App
