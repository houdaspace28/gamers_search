import { Menu,MenuButton,Button, MenuList,MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectSortOrder:(sortOrder:string)=>void;
    sortOrder:string;
}

export const SortSelector = ({onSelectSortOrder,sortOrder}:Props) => {
    const sortOrders=[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Release date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average rating'},
    ]
    const currentSortOrder=sortOrders.find(s=>s.value===sortOrder);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
             Order by: {currentSortOrder?.label || 'Relevance'}{}
            </MenuButton>
            <MenuList>
             {sortOrders.map((s)=><MenuItem onClick={()=>onSelectSortOrder(s.value)} key={s.value} value={s.value}>{s.label}</MenuItem>)}
            </MenuList>     
        </Menu>
      )
}
