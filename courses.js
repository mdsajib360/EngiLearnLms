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
        description: 'The Complete 2023 Web Development Bootcamp',
        author: 'Dr. Angela Yu'


    },
    {
        id: 3,
        img: `images/courses/courses3.jpg`,
        description: `UI UX & Web Design Master Course: Strategy, Design, Development`,
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
    {
        id: 10,
        img: `https://img-b.udemycdn.com/course/750x422/826410_16f3_14.jpg`,
        description: `Software Development From A to Z - Beginner's Complete Guide`,
        author: `Karoly Nyisztor`
    },
    {
        id: 11,
        img: `https://img-c.udemycdn.com/course/750x422/4879694_6afd_3.jpg`,
        description: `Software Development and IT - complete guide to key concepts`,
        author: `Kamil Kulik`
    },
    {
        id: 12,
        img: `https://img-c.udemycdn.com/course/750x422/1576854_9aeb_2.jpg`,
        description: `Beginning C++ Programming - From Beginner to Beyond`,
        author: `Youssef Mohamed G.`

    }
 
]

const coursesElement = document.getElementById('services');

for (course of courses) {
    const { img, description, author,id } = course;

    
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
