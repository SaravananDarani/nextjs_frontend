import * as React from 'react';
import { mainListItems } from './admin/listItems';

const adminLayout = ({ children }: any) => {
    return (
        <>
            <div>
                {mainListItems}
                {children}
            </div>
        </>
    );
}

export default adminLayout