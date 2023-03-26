import * as React from 'react';
import { mainListItems } from './admin/listItems';

const adminLayout = ({ children }: any) => {
    return (
        <div>
            {mainListItems}
            <div className='content-box'>
                {children}
            </div>
        </div>
    );
}

export default adminLayout