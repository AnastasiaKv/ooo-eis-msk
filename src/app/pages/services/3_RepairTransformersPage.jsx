import React, {useMemo} from 'react';
import MaterialReactTable from 'material-react-table';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const data = [
 {
  type: 'ТДМ315',
  price: '9800',
 },
 {
  type: 'ТДМ317',
  price: '10000',
 },
 {
  type: 'ТДМ 401,402',
  price: '11400',
 },
 {
  type: 'ТДМ 500',
  price: '11900',
 },
 {
  type: 'ВД 250',
  price: '9870',
 },
 {
  type: 'ВД 306 СЭ',
  price: '16520',
 },
 {
  type: 'ВД 306 СЭМ',
  price: '20790',
 },
 {
  type: 'ВД 406 СЭ',
  price: '17950',
 },
 {
  type: 'ВД 505',
  price: '27916',
 },
 {
  type: 'ВД 505',
  price: '41890',
 },
 {
  type: 'ВДУ 350',
  price: '41890',
 },
 {
  type: 'ВДУ 506',
  price: '33000',
 },
 {
  type: 'ВДУ 601',
  price: '37800',
 },
 {
  type: 'ТК - 75 кВт',
  price: '20000',
 },
 {
  type: 'ТК - 100 кВт',
  price: '25000',
 },
 {
  type: 'ТК - 150 кВт',
  price: '30000',
 },
];

const RepairTransformersPage = () => {
 const columns = useMemo(
  () => [
   {
    accessorKey: 'type', //simple recommended way to define a column
    header: 'Тип',
    muiTableHeadCellProps: {sx: {color: ''}}, //custom props
    Cell: ({cell}) => <strong>{cell.getValue()}</strong>, //optional custom cell render
   },
   {
    accessorFn: (row) => row.age, //alternate way
    id: 'price', //id required if you use accessorFn instead of accessorKey
    header: 'Цена руб.',
    Header: <i style={{color: ''}}>Age</i>, //optional custom markup
   },
  ],
  []
 );

 return (
  <div>
   <h2>
    <Typography variant='caption'>Цены на перемотку трансформаторов</Typography>
   </h2>
   <h4>
    <Typography variant='caption'>от 9000 руб.</Typography>
   </h4>
   <Stack>
    <MaterialReactTable
     columns={columns}
     data={data}
     enableBottomToolbar={false}
     enableGlobalFilterModes
     enablePagination={false}
     enableRowNumbers={false}
     enableRowVirtualization={false}
     initialState={{density: 'compact'}}
     muiTableContainerProps={{sx: {maxHeight: '600px'}}} //optionally customize the virtualizer
    />
   </Stack>
  </div>
 );
};
