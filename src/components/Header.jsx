import { Box } from '@mui/material';
import React from 'react';

const Header = () => {
    // 파일 변경
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
                <img src='/instar.jpg' alt='인스타 로고'style={{width: '300px'}}/>
                <img src='/youtube.png' alt='유튜브 로고'style={{width: '300px'}}/>
            </span>
        </header>
    );
};

export default Header;