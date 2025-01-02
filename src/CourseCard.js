import React from 'react';
import './CourseCard.css';

const CourseCard = ({ name, price, image }) => {
    return (
        <div className="course-card">
            <img src={image} alt={name} className="course-image" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
        </div>
    );
};

export default CourseCard;
