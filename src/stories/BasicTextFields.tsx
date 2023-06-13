import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';


export default function BasicTextFields({  value, ...props }) {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label={value} variant="outlined" />
        <TextField id="filled-basic" label={value} variant="filled" />
        <TextField id="standard-basic" label={value} variant="standard" />
      </Box>
    );
  }

  BasicTextFields.propTypes = {
    value: PropTypes.string,
    
  };
  
  BasicTextFields.defaultProps = {
    value:""
  };