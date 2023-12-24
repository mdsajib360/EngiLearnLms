let inputField = getId('search_box');
let searchResult = '';
localStorage.clear()
let not_found = getId('not_found');
let search_length = getId('search_length');
inputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        
        const db = localStorage;
        const element = getId('services')
        let elementContent = element.innerHTML;
        db.setItem('myElementContent', elementContent);

        searchResult = getId('services').innerHTML = '';
        

        async function fetchAndDisplaySingleCourses() {
            
            const response = await fetch(`/courses.json`);
            const course = await response.json();
            displayDeatails(course);

        }
        fetchAndDisplaySingleCourses();
        const displayDeatails = (courses) => {
            courses.filter(course => {
                const { description,img, id,author } = course;
               
                // console.log(course)

                // Test the function
                const str1 = description;
                const str2 = inputField.value;
                let result = compareStrings(str1, str2);
                
                let coursesElement = getId('services');
                if (result === true) {
                    coursesElement.innerHTML += `<div class="service ">
                <img src="${img}" alt="">
                <div className="description">
                <h5>${description} </h5>
                <p>${author} </p>
                <a class="view_course" href="/details.html?id=${id}">view course</a>
                </div>
                </div> 
                
                    `
                    result = false;
                } 
                
                
            })
            
            // clear search field
            inputField.value = '';
            const searchElement = getId('services');
            if (searchElement.children.length < 1) {
                not_found.innerText = `"!!Oops, we couldn't find any results for your search. Try using different keywords or phrases."`
                search_length.innerText = ``;
            } else {
                not_found.innerText = ''
                search_length.innerText = `"We've found 
                ${searchElement.children.length} results that might be relevant to your search."
`
            }
            console.log(searchElement.children.length);

            function compareStrings  (str1, str2) {
                let lowerStr1 = str1.toLowerCase();
                let lowerStr2 = str2.toLowerCase();
                let word1 = lowerStr2.split(' ');
                let word2 = lowerStr1.split(' ')
                for (let i = 0; i < word1.length; i++) {
                    
                    for (let j = 0; j < word2.length; j++) {

                        let checking = word1[i] === word2[j];
                        if (checking === true && word1[i].includes(word2[j])) {
                            return true;
                        }
                        
                    }
                }

                let matchingCharacters = 0;
                for (let i = 0; i < lowerStr2.length; i++) {
                    if (lowerStr1[i] === lowerStr2[i]) {
                        matchingCharacters++;

                    }
                    const matchPercentage = (matchingCharacters / lowerStr1.length) * 100;
                    if (matchPercentage >= 5) {
                        return true;
                        
                    } else if (matchPercentage === 0) {
                        return false;
                    }
                    
                }
                
                return false
                
            }
           


            
            
            

        }





    

   
        // console.log(se.innerHTML === '')





    }
    
    
})




const elementContent = localStorage.getItem('myElementContent');
const targetElement = getId('services');
targetElement.innerHTML = elementContent

// targetElement.insertAdjacentHTML('beforeend', elementContent);

function getId(_id) {
    return document.getElementById(_id);
}

const search = getId('search_btn');
search.addEventListener('click', (event) => {
  
        
        const db = localStorage;
        const element = getId('services')
        let elementContent = element.innerHTML;
        db.setItem('myElementContent', elementContent);

        searchResult = getId('services').innerHTML = '';
        

        async function fetchAndDisplaySingleCourses() {
            
            const response = await fetch(`/courses.json`);
            const course = await response.json();
            displayDeatails(course);

        }
        fetchAndDisplaySingleCourses();
        const displayDeatails = (courses) => {
            courses.filter(course => {
                const { description,img, id,author } = course;
               
                // console.log(course)

                // Test the function
                const str1 = description;
                const str2 = inputField.value;
                let result = compareStrings(str1, str2);
                
                let coursesElement = getId('services');
                if (result === true) {
                    coursesElement.innerHTML += `<div class="service ">
                <img src="${img}" alt="">
                <div className="description">
                <h5>${description} </h5>
                <p>${author} </p>
                <a class="view_course" href="/details.html?id=${id}">view course</a>
                </div>
                </div> 
                
                    `
                    result = false;
                } 
                
                
            })
            
            // clear search field
            inputField.value = '';
            const searchElement = getId('services');
            if (searchElement.children.length < 1) {
                not_found.innerText =`"!!Oops, we couldn't find any results for your search. Try using different keywords or phrases."`
            } else {
                not_found.innerText = ''
            }
            console.log(searchElement.children.length);

            function compareStrings  (str1, str2) {
                let lowerStr1 = str1.toLowerCase();
                let lowerStr2 = str2.toLowerCase();
                let word1 = lowerStr2.split(' ');
                let word2 = lowerStr1.split(' ')
                for (let i = 0; i < word1.length; i++) {
                    
                    for (let j = 0; j < word2.length; j++) {

                        let checking = word1[i] === word2[j];
                        if (checking === true && word1[i].includes(word2[j])) {
                            return true;
                        }
                        
                    }
                }

                let matchingCharacters = 0;
                for (let i = 0; i < lowerStr2.length; i++) {
                    if (lowerStr1[i] === lowerStr2[i]) {
                        matchingCharacters++;

                    }
                    const matchPercentage = (matchingCharacters / lowerStr1.length) * 100;
                    if (matchPercentage >= 2) {
                        return true;
                        
                    } else if (matchPercentage === 0) {
                        return false;
                    }
                    
                }
                
                return false
                
            }
           


            
            
            

        }





    

   
        // console.log(se.innerHTML === '')





    
    
})