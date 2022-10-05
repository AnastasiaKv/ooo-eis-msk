import React, {useMemo} from 'react';
import MaterialReactTable from 'material-react-table';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function SimpleTable({data}) {
 const columns = useMemo(
  () => [
   {
    accessorKey: 'name', //simple recommended way to define a column
    header: 'Услуга',

    muiTableHeadCellProps: {
     sx: {minWidth: 'max(464px, 40px)', width: '500px', padding: 0, color: ''},
    }, //custom props
    Cell: ({cell}) => {
     cell.getValue();
    }, //optional custom cell render
   },
   {
    accessorFn: (row) => row.price, //alternate way
    accessorKey: 'price',
    header: 'Цена',
    muiTableHeadCellProps: {sx: {}}, //custom props
    Cell: ({cell}) => {
     cell.getValue();
    }, //optional custom cell render
   },
  ],
  []
 );

 return (
  <Stack spacing={0} style={{paddingLeft: '8em', paddingBottom: '20px'}}>
   <MaterialReactTable
    columns={columns}
    data={data}
    enablePinning
    enableColumnActions={false}
    enableColumnFilters={false}
    enablePagination={false}
    enableSorting={false}
    enableBottomToolbar={false}
    enableTopToolbar={false}
    enableDensityToggle={false}
    tab
    muiTableBodyRowProps={{hover: false}}
    initialState={{density: 'compact'}}
    muiTableContainerProps={{
     sx: {textAlign: 'justify', overflowX: 'hidden', maxHeight: '800px'},
    }}
   />
  </Stack>
 );
}
