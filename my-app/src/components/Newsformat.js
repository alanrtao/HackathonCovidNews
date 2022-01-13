import * as React from 'react';
import Box from '@mui/material/Box';
import './HomeScreen.css';

function Newsformat(props) {
    return (
        <Box
        sx={{
            width: 300,
            height: 200,
            border: 1,
            borderRadius: 5
          }}
        >
            <h1>   Title: </h1>
            <h3>   Date: </h3>
            <h4>   Link: <a href="https://www.google.com/" target="_blank">Visit site</a> </h4>

        </Box>
    );
  }

export default Newsformat;