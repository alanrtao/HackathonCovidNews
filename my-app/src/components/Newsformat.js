import * as React from 'react';
import Box from '@mui/material/Box';

function Newsformat(props) {
    return (
        <Box
        sx={{
            width: '90%',
            height: 200,
            border: 1,
            borderRadius: 1,
            borderColor: 'grey.500',
            backgroundColor: '#EBEBEB',
            '&:hover': {
              backgroundColor: '#F1F1F1',
            },
          }}
        >
            <h3>   Title: </h3>
            <h3>   Date: </h3>
            <h4>   Link: <a href="https://www.google.com/" target="_blank">Visit site</a> </h4>

        </Box>
    );
  }

export default Newsformat;