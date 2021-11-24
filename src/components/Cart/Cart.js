import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let itemAdd = 0;
    let totalSalary = 0;
    let name = [];
    
    // const totalSalary = cart.reduce((a, b) => a + b.salary, 0)
    for (const staff of cart) {
        // counting staffs
        itemAdd = itemAdd + 1;
        // adding staff salary
        totalSalary = totalSalary + staff.salary;
        // pushing staff names
        name.push(staff.name);

    }
    return (
        <div className='cart-container'>
            <h1>Total Salary Counter</h1>
            <div className="cart-info">
                <h4> <span>Staff add:</span> <span>{itemAdd}</span></h4>
                <h4> <span>Total Salary:</span> <span>{totalSalary}</span></h4>
                {/* Showing staff names by mapping array */}
                <ul>
                    {
                        name.map(name => <li>{name}</li>)
                   }
               </ul>
            </div>
        </div>
    );
};

export default Cart;