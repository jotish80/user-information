import React from 'react';
import User from './user/User';
import Cart from './user/cart/Cart';

const Info = () => {
    return (
        <div>
           <div>
           <h1>This is info</h1>
           <User></User>
           </div>
           <div>
            <Cart></Cart>
           </div>
        </div>
    );
};

export default Info;