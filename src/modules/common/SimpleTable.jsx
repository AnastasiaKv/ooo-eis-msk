import React, {useMemo} from 'react';
import MaterialReactTable from 'material-react-table';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
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
  <Stack spacing={0} style={{ bgcolor: '#f7f7f7',paddingTop: '1em', paddingLeft: '1em'}}>
   <Paper elevation={1} sx={{maxWidth: '670px'}}>
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
      sx: {
       bgcolor: '#f7f7f7',
       textAlign: 'justify',
       overflowX: 'hidden',
       maxHeight: '900px',
       maxWidth: '700px',
      },
     }}
    />
   </Paper>
  </Stack>
 );
}
