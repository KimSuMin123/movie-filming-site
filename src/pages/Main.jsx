import { Box } from '@mui/material';
import React from 'react';

const Main = () => {
    return (
        <Box sx={{backgroundColor: '#efefef', display: 'flex', justifyContent: 'center'}}>
            <Box sx={{width: '100vw', height: '40rem', display: 'flex', justifyContent: 'center'}}>
                <img alt='이미지 아무거1나' src='/' style={{objectFit: 'fill'}}/>
            </Box>
        </Box>
    );
};

export default Main;