import {makeStyles} from '@material-ui/core/styles';

//Style
const useStyles = makeStyles((theme) => ({
 root: {
  flexGrow: 1,
  width: '36em',
 },

 divButtonCenter: {
  textAlign: 'center',
 },
 circleOrange: {
  marginLeft: '5px',
  width: '40px',
  height: '40px',
  color: 'pink',
  '&.MuiStepIcon-active': {
   color: '#f56565',
  },
  '&.MuiStepIcon-completed': {
   color: '#f56565',
  },
 },
}));

export {useStyles};
