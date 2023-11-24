const courses = [
    
    {
        id: 2,
        img: 'images/courses/courses2.jpg',
        description: 'The Complete 2023 Web Development Bootcamp',
        author: 'Dr. Angela Yu'


    },
    
   
    {
        id: 5,
        img: `images/courses/courses5.jpg`,
        description: `Wordpress for Beginners - Master Wordpress Quickly
`,
        author: `by Andrew Williams

`
    }
  
   

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