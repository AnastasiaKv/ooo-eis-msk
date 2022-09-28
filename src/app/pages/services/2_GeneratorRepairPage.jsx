import React, {useMemo} from 'react';
import MaterialReactTable from 'material-react-table';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const data = [
  {
    name: 'Замена щеточного узла (для некоторых моделей)',
    price: 'от 900 руб.',
  },
  {
    name: 'Замена реле-регулятора напряжения',
    price: 'от 1300 руб.',
  },
  {
    name: 'Замена диодного моста',
    price: 'от 1600 руб.',
  },
  {
    name: 'Замена диодов',
    price: 'от 550 руб.',
  },
  {
    name: 'Замена роторных колец',
    price: 'от 900 руб.',
  },
  {
    name: 'Замена подшипников',
    price: 'от 700 руб.',
  },
  {
    name: 'Замена или ремонт ротора',
    price: 'от 2000 руб.',
  },
  {
    name: 'Замена статорной обмотки',
    price: 'от 1800 руб.',
  },
  {
    name: 'Замена проставок под подшипники — только работа',
    price: '500 руб.',
  },
  {
    name: 'Замена шкива',
    price: 'от 700 руб.',
  },
  {
    name: 'Замена обгонной муфты (для некоторых моделей)',
    price: 'от 2300 руб.',
  },
];

const GeneratorRepairPage = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: '',
        muiTableHeadCellProps: {sx: {color: ''}}, //custom props
        Cell: ({cell}) => <strong>{cell.getValue()}</strong>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.age, //alternate way
        id: 'price', //id required if you use accessorFn instead of accessorKey
        header: '',
        Header: <i style={{color: ''}}>Age</i>, //optional custom markup
      },
    ],
    []
  );

  return (
    <div>
      <h2>
        <Typography variant='caption'>Ремонт генератора</Typography>
      </h2>
      <h4>
        <Typography variant='caption'>от 500 руб.</Typography>
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

export default GeneratorRepairPage;
