import { Box } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', backgroundColor: '#fefefe', height: '6rem'}}>
            <span>
                <img src='/ampm_logo.png' alt='로고'style={{width: '300px'}}/>
            </span>
            <Box sx={{ display: 'flex', gap: '4rem', fontWeight: '700', fontSize: '1.5rem'}}>
                <p>브랜드</p>
                <p>제품</p>
                <p>문의 남기기</p>
            </Box>
            <span>
                <p>인스타로고</p>
                <p>유튜브로고</p>
            </span>
        </header>
    );
};

export default Header;