import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const leftPadding = {
     paddingLeft: "8cm"
};
const spacing_10cm = {
     paddingLeft: "10cm"
};
const spacing_40px = {
     paddingLeft: "40px"
};

export default function Footer() {
     return (
          <footer style={{ color: "#292929", position: "fixed", width: "100%", bottom: 0 }}>
               <center>  <AppBar sx={{ bgcolor: "#292929" }} position="static" >
                    <div style={leftPadding}>
                         <Toolbar style={{ justifyContent: "left" }}>
                              <div> <Typography variant="caption">©Copyright</Typography></div>
                              <div style={spacing_10cm}> <Typography variant="caption">Карта сайта</Typography></div>
                              <div style={spacing_40px}>  <Typography variant="caption">Политика</Typography></div>
                              <div style={spacing_40px}> <Typography variant="caption">Конфеденциальность</Typography></div>
                         </Toolbar>
                    </div>
               </AppBar></center>
          </footer>
     );
}
