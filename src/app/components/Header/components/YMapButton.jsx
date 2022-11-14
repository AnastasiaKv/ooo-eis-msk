import React, {useState} from 'react';
import MapIcon from '@mui/icons-material/Map';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Stack, width} from '@mui/system';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {YMaps, Map, Placemark, GeolocationControl, RouteButton} from '@pbe/react-yandex-maps';
import {Paper} from '@mui/material';

const theme = createTheme({
 components: {
  // todo: remove once the issue is addressed: https://github.com/mui/material-ui/issues/31185
  MuiDialogContent: {
   styleOverrides: {root: {paddingTop: `${20}px !important`}},
  },
 },
});
const contactFormEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

function YMap() {
 const defaultState = {
  center: [55.758154, 37.733284],
  zoom: 16,
  controls: [],
 };
 //style={{width: '16em', height: '15em'}}
 return (
  <YMaps>
   <Map width='1000px' height='500px' defaultState={defaultState}>
    <Placemark geometry={[55.758154, 37.733284]} />
    <GeolocationControl options={{float: 'left'}} />
    {/* <RouteButton
     options={{adjustMapMargin: 'true', popupWidth: '300px', float: 'left', size: 'small'}}
    /> */}
   </Map>
  </YMaps>
 );
}

function YMapButton(props) {
 const {classes} = props;
 const [open, setOpen] = useState(false);
 const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

 const [isShown, setIsShown] = useState(false);
 const [fullWidth, setFullWidth] = useState(true);

 const handleClick = (event) => {
  // 👇️ toggle shown state

  setIsShown((current) => !current);
  // 👇️ or simply set it to true
  //setIsShown(true);
  setFullWidth(event.target.checked);
 };

 function handleClose() {
  setOpen(false);
 }

 function handleClickOpen() {
  setSubmitionCompleted(false);
  setOpen(true);
 }

 return (
  <React.Fragment>
   <div style={{display: 'flex', flexWrap: 'wrap'}}>
    <Typography
     variant='h6'
     component='div'
     sx={{flexGrow: 1}}
     style={{paddingLeft: '20px', color: '#2d3748'}}
    >
     info@eis-msk.ru
    </Typography>
    <Button
     onClick={handleClickOpen}
     component='div'
     style={{borderRadius: 3, backgroundColor: '#2d3748', textTransform: 'inherit'}}
     variant='contained'
     startIcon={<MapIcon />}
    >
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Карта&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Button>
    <Dialog maxWidth='md' open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
     {!isShown && (
      <Stack sx={{backgroundColor: '#2d3748', color: '#FFFFFFFF', flexGrow: 1}}>
       <DialogTitle style={{marginTop: '-0.5em', marginBottom: '-0.5em'}} id='form-dialog-title'>
        <Typography
         variant='h4'
         component='h1'
         sx={{
          fontFamily: 'Furore',
          color: '#FFFFFFFF',
          flexGrow: 1,
          marginTop: '-0.2em',
          marginBottom: '-0.1em',
         }}
        >
         Наш офис в Москве
        </Typography>
       </DialogTitle>
       <ThemeProvider theme={theme}>
        <DialogContent>
         {/* <DialogContentText>Оставьте свои данные - и мы Вам перезвоним!</DialogContentText> */}
         <Formik
          onSubmit={(values, {setSubmitting}) => {
           setSubmitting(true);
           axios
            .post(contactFormEndpoint, values, {
             headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
             },
            })
            .then((resp) => {
             setSubmitionCompleted(true);
            });
          }}
         >
          {(props) => {
           const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
           } = props;
           return (
            <Form onSubmit={handleSubmit}>
             <Stack
              sx={{
               overflow: 'hidden',
               marginTop: '-15px',
               marginLeft: '-5.3em',
               marginRight: '-23px',
               marginBottom: '-13px',
               padding: '0px 0em 10px 0em',
               flexDirection: 'column',
               alignItems: 'baseline',
              }}
              direction='row'
              spacing={0}
              noValidate
              component='form'
             >
              <YMap />
             </Stack>
             <DialogActions style={{}}>{/* <DisplayFormikState {...props} /> */}</DialogActions>
            </Form>
           );
          }}
         </Formik>
        </DialogContent>
       </ThemeProvider>
      </Stack>
     )}
    </Dialog>
   </div>
  </React.Fragment>
 );
}
export default YMapButton;
