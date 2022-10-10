import React, {useMemo} from 'react';
import MaterialReactTable from 'material-react-table';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function SimpleTable({data}) {
 const columns = useMemo(
  () => [
   {
    accessorKey: 'name',
    header: 'Услуга',
    muiTableHeadCellProps: {},
    Cell: ({cell}) => {
     cell.getValue();
    },
   },
   {
    accessorFn: (row) => row.price,
    accessorKey: 'price',
    header: 'Цена',
    muiTableHeadCellProps: {},
    Cell: ({cell}) => {
     cell.getValue();
    },
   },
  ],
  []
 );

 return (
  <Stack spacing={0} style={{paddingLeft: '1em'}}>
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
    muiTableBodyRowProps={{hover: false}}
    initialState={{density: 'comfortable'}}
    muiTableContainerProps={{
     sx: {textAlign: 'justify', overflowX: 'hidden', maxHeight: '900px'},
    }}
   />
  </Stack>
 );
}
