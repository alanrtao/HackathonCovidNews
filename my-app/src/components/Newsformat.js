import * as React from 'react';
import Box from '@mui/material/Box';

function Newsformat(props) {
    return (
        <Box
        sx={{
            width: 300,
            height: 200,
            border: 1,
            borderRadius: 5,
            borderColor: 'grey.500',
            backgroundColor: '#FFFFE0',
            '&:hover': {
              backgroundColor: '#FFF8DC',
              opacity: [0.3, 0.9, 0.2],
            },
          }}
        >
            <h1>   Title: </h1>
            <h3>   Date: </h3>
            <h4>   Link: <a href="https://www.google.com/" target="_blank">Visit site</a> </h4>

        </Box>
    );
  }

export default Newsformat;