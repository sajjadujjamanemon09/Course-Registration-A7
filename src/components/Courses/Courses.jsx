import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses,setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])


    return (
        <div className="md:w-3/4 grid  md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;