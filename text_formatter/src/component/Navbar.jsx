import React from 'react'
import PropTypes from 'prop-types'

import {AppBar,Toolbar,Typography,Button} from "@material-ui/core";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

import {Link } from  "react-router-dom";

export default function Navbar(props) {
   
   //  const navlist=[,' Search',' Hello'];
    return (
        <div>
        
           <AppBar><Toolbar>
           <Typography variant="h6" style={{flexGrow:1}}>{props.title}</Typography>
           
          <Button href="/" color="inherit" >Home</Button>
          <Button href="/about" color="inherit">About</Button>
         

</Toolbar> 

           </AppBar>
           <h1>Enter your Text here</h1>
      
        </div>
    )
}
// export default Navbar;
// Navbar.propTypes={title:PropTypes.string}
                  
