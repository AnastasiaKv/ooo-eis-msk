import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import {useAutocomplete} from '@mui/base/AutocompleteUnstyled';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@material-ui/styles';
import Page1 from '../../OurServices/pages/1_RepairMotorsPage';
import Page2 from '../../OurServices/pages/2_GeneratorRepairPage';
import Page3 from '../../OurServices/pages/3_RepairTransformersPage';
import Page4 from '../../OurServices/pages/4_RefrigerationMachineRepairPage';
import Page5 from '../../OurServices/pages/5_RewindingMotorsPage';
import Page6 from '../../OurServices/pages/6_RepairOfElectricHeatersPage';
import Page7 from '../../OurServices/pages/7_SaleOfElectricalComponentsPage';
import Page8 from '../../OurServices/pages/8_RepairOfBoardsAndBlocksPage';
import Page9 from '../../OurServices/pages/9_TORepairOfPassengerCarsPage';
import Page10 from '../../OurServices/pages/10_SurfacingOfShaftsAndShieldsPage';

import Error404 from '../../../core/errors/Error404';
const useStyles = makeStyles({
 flexGrow: {
  flex: '1',
 },
 button: {
  backgroundColor: '#FFFFFFFF',
  color: '#292929',
  '&:hover': {
   backgroundColor: '#feb2b2',
   color: '#292929',
  },
 },
});
const filterData = (query, itemList) => {
 if (!query) {
  return itemList;
 } else {
  return itemList.filter((item) => item.toLowerCase().includes(query));
 }
};

const SearchBar = ({setSearchQueries, iconStart, iconEnd, InputProps, ...props}) => {
 const classes = useStyles();

 const [value, setValue] = React.useState(0);

 const [isShown, setIsShown] = useState(false);
 const [searchQuery, setSearchQuery] = useState('');
 const handleClick = (event, newValue) => {
  // 👇️ toggle shown state
  setValue(newValue);
 };

 const dataFiltered = filterData(searchQuery, services);
 return (
  <React.Fragment>
   <div style={{display: 'flex', flexWrap: 'wrap'}}>
    <TextField
     style={{left: '-27px', borderRadius: '0', top: '16px'}}
     onInput={(e) => {
      //       setSearchQuery(e.target.value);
      //setIsShown(true);
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
     <div style={{justifyContent: 'left', marginBottom: '-34em', marginRight: '-27em'}}>
      <Paper
       sx={{textAlign: 'left'}}
       style={{
        margin: '3em 0em -19em -16em',
        width: '400px',
        padding: 3,
        background: '#FFFFFFFF',
        color: 'black',
       }}
      >
       {dataFiltered.map((item) => (
        <Stack direction='column'>
         <LinkButton
          onClick={value}
          label={item.title}
          to={item.path}
          key={item.id}
          className={classes.button}
         />
         <Routes>
          <Route exact path={item.path} element={item.page} />
         </Routes>
        </Stack>
       ))}
      </Paper>
     </div>
    )}
   </div>
  </React.Fragment>
 );
};

export default SearchBar;

function LinkButton(props) {
 return (
  <Button
   sx={{
    textTransform: 'inherit',
    bgcolor: '#808080',
    minWidth: '100px',
    minHeight: '25px',
   }}
   component={Link}
   onClick={(event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.preventDefault());
   }}
   {...props}
  >
   <Typography>{props.label}</Typography>
  </Button>
 );
}

function ListProvidedServices(dataFiltered) {
 const [value, setValue] = React.useState(services);

 return <></>;
}

const services = [
 {
  id: 1,
  path: 'services/repair-motors-page',
  title: 'Ремонт электродвигателей',
  page: <Page1 />,
 },
 {
  id: 2,
  path: 'services/generator-repair-page',
  title: 'Ремонт генераторов',
  page: <Page2 />,
 },
 {
  id: 3,
  path: 'services/repair-transformers-page',
  title: 'Ремонт трансформаторов',
  page: <Page3 />,
 },
 {
  id: 4,
  path: 'services/refrigeration-machine-repair-page',
  title: 'Ремонт холодильных машин и компрессоров',
  page: <Page4 />,
 },
 {
  id: 5,
  path: 'services/rewinding-motors-page',
  title: 'Ремонт и перемотка двигателей',
  page: <Page5 />,
 },
 {
  id: 6,
  path: 'services/repair-of-electric-heaters-page',
  title: 'Ремонт электронагревателей',
  page: <Page6 />,
 },
 {
  id: 7,
  path: 'services/sale-of-electrical-components-page',
  title: 'Продажа электрокомпонентов',
  page: <Page7 />,
 },
 {
  id: 8,
  path: 'services/repair-of-boards-and-blocks-page',
  title: 'Ремонт плат и электронных блоков',
  page: <Page8 />,
 },
 {
  id: 9,
  path: 'services/maintenance-and-repair-of-passenger-cars-page',
  title: 'ТО и ремонт электрооборудования пассажирских вагонов',
  page: <Page9 />,
 },
 {
  id: 10,
  path: 'services/surfacing-of-shafts-and-shields-page',
  title: 'Наплавка валов и щитов',
  page: <Page10 />,
 },
];
