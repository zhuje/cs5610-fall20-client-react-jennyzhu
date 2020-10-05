const url = "https://wbdv-generic-server.herokuapp.com/api/zhuje/courses";


// GET all courses
export const findAllCourses = () =>
    fetch(url)
        .then(response => response.json());

// POST -- create course
export const createCourse = (newCourse) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newCourse),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

// Delete
export const deleteCourseService = (courseId) =>
    fetch(`${url}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export const updateCourse = (courseId, newCourse) =>
    fetch(`${url}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(newCourse),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());



export const findCourseById = (courseId) =>
    fetch(`${url}/${courseId}`, {
    })
        .then(response => response.json());