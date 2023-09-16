import React from 'react';
import { Typography } from '@mui/material';
import './styles.scss'; // Import the SCSS file
import Countdown from '../../Countdown';

function UnderConstruction() {
  return (
    <div className="container">
      <div className="header">
        <Typography variant="h1" component="h1">
          Site is under construction
        </Typography>
      </div>
      <div className="error-body">
        <Countdown />
      </div>
    </div>
  );
}

export default UnderConstruction;
