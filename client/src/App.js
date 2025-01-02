import React from 'react';
import CourseCard from './CourseCard';
import img from './GolfCourseImage.jpg'

const courses = [
  {
    name: 'Pebble Beach Golf Links',
    price: 550,
    image: 'https://example.com/pebble-beach.jpg',
  },
  {
    name: 'St. Andrews Old Course',
    price: 250,
    image: 'https://example.com/st-andrews.jpg',
  },
  // Add more courses as needed
];

const App = () => {
  return (
      <div className="App">
        <h1>Golf Course Selections</h1>
        <div className="course-list">
          {courses.map((course, index) => (
              <CourseCard
                  key={index}
                  name={course.name}
                  price={course.price}
                  image={course.image}
              />
          ))}
        </div>
      </div>
  );
};

export default App;
