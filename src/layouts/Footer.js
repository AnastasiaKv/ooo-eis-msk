import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
     makeStyles,
     createMuiTheme,
     ThemeProvider
} from "@material-ui/core/styles";

const leftPadding = {
     paddingLeft: "8cm"
};
const spacing_10cm = {
     paddingLeft: "10cm"
};
const spacing_40px = {
     paddingLeft: "40px"
};

const useStyles = makeStyles((theme) => ({
     customizeToolbar: {
          height: 90
     }
}));
export default function Footer() {
     const classes = useStyles();
     return (
          <div>
               <footer style={{ color: "#292929", position: "fixed", width: "100%", bottom: 0 }}>

                    <AppBar sx={{ bgcolor: "#292929" }} position="static" >
                         <div style={leftPadding}>
                              <Toolbar className={classes.customizeToolbar} >
                                   <div> <Typography variant="caption">©Copyright</Typography></div>
                                   <div style={spacing_10cm}> <Typography variant="caption">Карта сайта</Typography></div>
                                   <div style={spacing_40px}>  <Typography variant="caption">Политика</Typography></div>
                                   <div style={spacing_40px}> <Typography variant="caption">Конфеденциальность</Typography></div>
                              </Toolbar>
                         </div>
                    </AppBar>
               </footer></div>
     );
}
