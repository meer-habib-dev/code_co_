import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Staff from '../Staff/Staff';
import './Coders.css'
const Coders = () => {

    const [staffs, setStaffs] = useState([]);
    const [cart, setCart] = useState([]);

    // fetching json data 
    useEffect(() => {
        fetch('./coders.json')
            .then(res => res.json())
            .then(data => setStaffs(data));
            
    }, []);
    
    // getting data in cart
    const handleClick = (staff) => {
        const newAdd = [...cart, staff];
        setCart(newAdd);
    }

    return (
        <div className='coders-container'>
            <div>

            </div>
            <div>
                <section>
                    <h1>Find all the developer</h1>
                    {/* sending staffs in Staff comp */}
                    <div className="staff-container">
                        {
                            staffs.map(staff => <Staff key={staff.id} staff={staff} handleClick={handleClick}></Staff> )
                        }   
                    </div>
                </section>
            </div>
            <div className="cart-container">
                {/* Sending cart info */}
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Coders;