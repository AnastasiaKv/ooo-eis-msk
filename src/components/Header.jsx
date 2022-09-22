import React from "react";
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Logo from '././../assets/img/logo.svg'
import MapIcon from '@mui/icons-material/Map';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const mapAndMailStyle = {

  paddingRight: "20px"
};
const callButtonStyle = {
  paddingLeft: "7px",
  paddingRight: "20px"
};
const ss = {
  position: 'relative',
  display: "flex",
  flexDirection: "row"
};
const searchStyle = {
  top: 3,
  verticalAlign: "bottom",
  fontSize: 10,
};
const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
    />
  );
};

export default function Header() {
  return (
    <div className="ees-header">
      <AppBar className="ees-header-content" elevation={0} sx={{ bgcolor: "white" }}>
        <Toolbar >
          <Box sx={{marginLeft:"-18px", marginRight: "60px", height: 75 }}
            component='img'
            alt='Company logo.'
            src={Logo} />

          <div style={mapAndMailStyle}>
            <Typography variant="h6"
              component="div" sx={{ flexGrow: 1 }} style={{ fontSize: 18, color: "#292929" }}>
              info@ers.msk.ru
            </Typography>
            <Button component="div" style={{ backgroundColor: '#292929', }}
              variant="contained" startIcon={<MapIcon />}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Карта&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
          </div>

          <IconTextField style={searchStyle} label="Поиск.." iconEnd={<SearchIcon />} />

          <div style={callButtonStyle}>
            <Typography variant="h6"
              component="div" sx={{ flexGrow: 1 }} style={{ fontSize: 18, color: "#292929" }}>
              8-800-232-32-22
            </Typography>
            <Button style={{ backgroundColor: "#f12b29" }} variant="contained" startIcon={<HeadsetMicIcon />}>
              Обратный звонок
            </Button>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}  
