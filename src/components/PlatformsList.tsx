import { Menu,MenuButton,Button, MenuList,MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from "../hooks/useGames"
import {usePlatforms} from '../hooks/usePlatforms'

interface Props{
    onSelectPlatform:(platform:Platform)=>void;
    selectedPlatform:Platform | null;
}

export const PlatformsList =({onSelectPlatform,selectedPlatform}:Props)=>{
  const {data,error}=usePlatforms(); 
  if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
         {data.map((d)=><MenuItem onClick={()=>onSelectPlatform(d)} key={d.id}>{d.name}</MenuItem>)}
        </MenuList>     
    </Menu>
  )
}
