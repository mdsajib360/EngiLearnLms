const courses = [
    {
        id: 1,
        img: 'images/courses/courses1.png',
        description: 'The Complete Cyber Security Course : Hackers Exposed!',
        author: 'by Alexandar Oni'


    },
    {
        id: 2,
        img: 'images/courses/courses2.jpg',
        description: 'The Complete Cyber Security Course : Hackers Exposed!',
        author: 'by Joe Natoli'


    },
    {
        id: 3,
        img: `images/courses/courses3.jpg`,
        description: `TUX & Web Design Master Course: Strategy, Design, Development`,
        author: `by Daniel Walter Scott`


    },
    {
        id: 4,
        img: `images/courses/courses4.jpg`,
        description: `Ninja Writing: The Four Levels Of Writing Mastery`,
        author: `by Maximilian Schwarzmüller`
    },
    {
        id: 5,
        img: `images/courses/courses5.jpg`,
        description:`Wordpress for Beginners - Master Wordpress Quickly
`,
        author:`by Andrew Williams

`
    },
    {
        id: 6,
        img: `images/courses/courses6.jpg`,
        description:`Maya for Beginners: Complete Guide to 3D Animation`,
        author:`by Lucas Redly`
    },
    {
        id: 7,
        img: `images/courses/courses7.jpg`,
        description:`React - The Complete Guide (incl Hooks, React Router, Redux)`,
        author:`by Maximilian Schwarzmüller`
    },
    {
        id: 8,
        img: `images/courses/courses8.jpg`,
        description:`Unreal Engine C++ Developer: Learn C++ and Make Video Games`,
        author:`by Sam Pattuzi, GaveDev Team`
    },
    {
        id: 9,
        img: `images/courses/course9.png`,
        description:`The Game Design and AI Master Class Beginner to Expert`,
        author:`by [ School of Game Design ]`
    },
    
]

const coursesElement = document.getElementById('courses');

for (course of courses) {
    const { img, description, author } = course;

    
    coursesElement.innerHTML += `
     <div class="card course">
                <img src="${img}" alt="">
                <h5>${description} </h5>
                <p>${author} </p>
                <button class="btn btn-danger">Enroll It Now</button>
            </div>
    
    `
}