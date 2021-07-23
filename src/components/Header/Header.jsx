import React from 'react';
import  '../../styles/Header.scss';
import reactBg from '../../images/react-bg.jpeg';

const Header = () => {
    return (
        <header className={'header'}>
            Header
            <img src={reactBg} alt="react"/>
        </header>
    );
};

export default Header;