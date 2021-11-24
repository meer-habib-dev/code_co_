import React from 'react';
import './Staff.css'
const Staff = (props) => {

    // State for disable button
    const [disable, setDisable] =  React.useState(false)
    // distructing datas from object
    const { name, image, age, skill, salary } = props.staff;

    return (
        <div className='staff-container'>
            <div className="staff">
                <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div className="staff-info">
                <h3>{name}</h3>
               <div className='info'>
                    <p> <span>Age:</span> <span>{age}</span></p>
                    <p> <span>Skill:</span> <span>{skill}</span></p>
                    <p> <span>Salary:</span> <span>{salary}</span></p>
                </div>
                <button disabled={disable}  onClick={() => {
                    props.handleClick(props.staff)
                        setDisable(true)
                    }}>
                        <i className="fas fa-user"></i>  Add User
                </button>

            </div>
            </div>
        </div>
    );
};

export default Staff;