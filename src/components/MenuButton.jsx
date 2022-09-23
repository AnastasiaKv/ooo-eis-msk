import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MenuButtonStack() {
  return (
    <div style={{ marginTop: '1px' }} className='ees-menu-button'>
      <Stack direction='row' spacing={4}>
        <Button
          style={{ borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1' }}
          variant='contained'
        >
          Главная
        </Button>
        <Button
          style={{ borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1' }}
          variant='contained'
        >
          О нас
        </Button>
        <Button
          style={{ borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1' }}
          variant='contained'
        >
          Стоимость
        </Button>
        <Button
          style={{ borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1' }}
          variant='contained'
        >
          Статьи
        </Button>
        <Button
          style={{ borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1' }}
          variant='contained'
        >
          Контакты
        </Button>
      </Stack>
      <Stack direction='row' spacing={0}>
        <p
          style={{
            textAlign: 'left',
            paddingLeft: '0px',
            paddingTop: '20px',
            margin: '5px 0',
            width: '23cm',
          }}
          className='blocktext'
        >
          <Typography
            variant='body2'
            component='span'
            sx={{ flexGrow: 1 }}
            style={{
              position: 'relative',
              justifyContent: 'space-around',
              fontSize: 12,
              color: '#292929',
            }}
          >
            Также как перспективное планирование предоставляет широкие возможности для системы
            массового участия. Следует отметить, что сложившаяся структура организации позволяет
            оценить значение поставленных обществом задач. Каждый из нас понимает очевидную вещь:
            консультация с широким активом позволяет выполнить важные задания по разработке
            распределения внутренних резервов и ресурсов.
          </Typography>
        </p>
      </Stack>
    </div>
  )
}
