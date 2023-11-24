const courses = [

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