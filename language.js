const courses = [
    {
        id: 12,
        img: `https://img-c.udemycdn.com/course/750x422/1576854_9aeb_2.jpg`,
        description: `Beginning C++ Programming - From Beginner to Beyond`,


    },
    {
        id: 7,
        img: `images/courses/courses7.jpg`,
        description: `React - The Complete Guide (incl Hooks, React Router, Redux)`,
        author: `by Maximilian Schwarzmüller`
    },
]

const coursesElement = document.getElementById('services');

for (course of courses) {
    const { img, description, author, id } = course;


    coursesElement.innerHTML += `
     <div class="service ">
                <img src="${img}" alt="">
                <div className="description">
                <h5>${description} </h5>
                <p>${author} </p>
                <a class="view_course" href="/details.html?id=${id}">view course</a>
                </div>
                </div>
                

    `
}