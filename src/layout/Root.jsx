import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='md:max-w-4xl lg:max-w-7xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;