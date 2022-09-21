import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Logo from '../assets/img/logo.svg'
import MapIcon from '@mui/icons-material/Map';

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

const leftPadding = {
  paddingLeft: "7cm",
};
const toolbarStyle = {
  paddingTop: 3,
  paddingLeft: "8cm"
};
const mapAndMailStyle = {
  paddingTop: 3,
  paddingLeft: "80px",
  paddingRight: "20px"
};
const searchBorderStyle = {
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#292929',
  borderRadius: 4,

  marginLeft: 0
};
const callButtonStyle = {
  paddingTop: 3,
  paddingLeft: "20px",
  paddingRight: "20px"
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#292929',
  borderRadius: 2
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#292929',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  border: {
    borderRadius: 2,
    borderColor: "#292929",
    marginTop: theme.spacing(4.5)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: "#292929"
  },
  customHeight: {
    minHeight: 1200
  },
  offset: theme.mixins.toolbar
}));


export default function Header() {
  const classes = useStyles();
  const [example, setExample] = useState("primary");

  return (
    <header style={{ color: "white", position: "fixed", width: "100%" }}>
      <AppBar elevation={0} sx={{ bgcolor: "white" }} position="static">
        <div style={leftPadding}>
          <Toolbar >
            <Box sx={{ width: "auto", height: 85, paddingTop: 3 }}
              component='img'
              alt='Company logo.'
              src={Logo} />

            <div style={mapAndMailStyle}>
              <Typography variant="h6"
                component="div" sx={{ flexGrow: 1 }} style={{ color: "#292929" }}>
                info@ers.msk.ru
              </Typography>
              <Button
                component="div"
                style={{
                  backgroundColor: '#292929',
                }}
                variant="contained" startIcon={<MapIcon />}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Карта&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            </div>

            <div className={classes.border} style={searchBorderStyle}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Поиск.."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </div>

            <div style={callButtonStyle}>
              <Typography variant="h6"
                component="div" sx={{ flexGrow: 1 }} style={{ color: "#292929" }}>
                8-800-232-32-22
              </Typography>
              <Button
                style={{ backgroundColor: "red" }}
                variant="contained" startIcon={<HeadsetMicIcon />}>
                Обратный звонок
              </Button>
            </div>

          </Toolbar>
        </div>
      </AppBar>

    </header>
  );
}