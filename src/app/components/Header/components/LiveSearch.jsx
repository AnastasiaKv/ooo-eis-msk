import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
const data = [
 {
  id: 1,
  path: 'services/repair-motors-page',
  title: 'Ремонт электродвигателей',
 },
 {
  id: 2,
  path: 'services/generator-repair-page',
  title: 'Ремонт генераторов',
 },
 {
  id: 3,
  path: 'services/repair-transformers-page',
  title: 'Ремонт трансформаторов',
 },
];

const filterData = (query, data) => {
 if (!query) {
  return data;
 } else {
  return data.filter((d) => d.toLowerCase().includes(query));
 }
};

const SearchBar = ({setSearchQueries, iconStart, iconEnd, InputProps, ...props}) => {
 const [isShown, setIsShown] = useState(false);
 const [searchQuery, setSearchQuery] = useState('');
 const handleClick = (event) => {
  // 👇️ toggle shown state

  setIsShown((current) => !current);
  // 👇️ or simply set it to true
  //setIsShown(true);
 };

 const dataFiltered = filterData(searchQuery, data);
 return (
  <form>
   <TextField
    style={{left: '-27px', borderRadius: '0', top: '16px'}}
    onInput={(e) => {
     //setSearchQuery(e.target.value);
     // setIsShown(e.target.value);
    }}
    variant='outlined'
    placeholder='Поиск...'
    size='small'
    type='search'
    sx={{width: '303px', padding: '0.65rem 0.5rem'}}
    {...props}
    InputProps={{
     ...InputProps,
     startAdornment: iconStart ? (
      <InputAdornment position='start'>{iconStart}</InputAdornment>
     ) : null,
     endAdornment: iconEnd ? <InputAdornment position='end'>{iconEnd}</InputAdornment> : null,
    }}
   />

   {isShown && (
    <form style={{marginBottom: '-6em'}}>
     <Paper style={{padding: 3}}>
      {dataFiltered.map((d) => (
       <div
        className='text'
        style={{
         padding: 2,
         justifyContent: 'normal',
         fontSize: 20,
         color: '#292929',
         margin: 1,
         width: '250px',
         BorderColor: 'green',
         borderWidth: '10px',
        }}
        key={d.id}
       >
        {d.title}
       </div>
      ))}
     </Paper>
    </form>
   )}
  </form>
 );
};

export default SearchBar;
