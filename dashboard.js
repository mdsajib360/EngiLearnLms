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
  

]


const coursesElement = document.getElementById('services');

for (course of courses) {
    const { img, description, author, id } = course;


    coursesElement.innerHTML += `
     <div class="service ">
                <img style="width:200px" src="${img}" alt="">
                <div className="description">
                <h5>${description} </h5>
                <p>${author} </p>
                <a style="text-decoration: underline;" class="view_course" >Continue to course</a>
                </div>
                </div>
                <hr>

    `
}