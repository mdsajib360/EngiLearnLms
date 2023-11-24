

async function fetchAndDisplaySingleCourses() {
    const productId = new URLSearchParams(window.location.search).get('id')
    const response = await fetch(`/details.json`);
    const course = await response.json();
    displayDeatails(course, productId);
    
} 


fetchAndDisplaySingleCourses();

const displayDeatails = (course, id) => {
    
    const { category, title, volume, seller_position, view_title, by, rate, total_ratings, students, last_update, language, view_paragraps, top_companies, course_content, cart_content, requirements, descripton, instructor,img } = course[id - 1];
    const detail_header = document.getElementById('detail_header');
    const dd = document.getElementById('view_card')
    const company = document.getElementById('company');
    const cart_section = document.getElementById('cart_section');
    
   
    detail_header.innerHTML = `
   <div class="cat">

    <h6>Category <span id="arrow">></span> ${category} </h6>
    <h2>${title}</h2>
    <p>${volume}</p>
    <div><button style="background: goldenrod"> ${seller_position} </button> <span> ${rate}4</span> <span>${total_ratings} </span> <div class="Stars" style="--rating: ${rate};" aria-label="Rating of this product is 2.3 out of 5.">  <span id="student"> ${students}  students</span></div>
    <h6 class="mt-2">Created By  <a id="a">${by}</a></h6>
    <span> <img class="icons" src="/images/icons/time.png"> ${last_update} </span> 
    <span> <img class="la" src="/images/icons/language.png"> ${language} </span>
    </div>
   </div>

    <div class="s_I" style="background-image:url(${img}); width: 30vw;height:30vh;
    background-size: cover;
     background-repeat: no-repeat;
  background-size: cover;
  background-position: center ;
  position: relative;
 
    ">
     <img class="video_icon" src="images/icons/video2.png">
    </div>

`
    view_card.innerHTML = `
    <h4> ${view_title} </h4>
    <div className="contents" style="display: flex; justify-content: space-between;">
        <div class="paragaraph">
        <img class="pa-img" src="images/icons/tick.png"><p class="pa">  ${view_paragraps[0]} </p>
        <img class="pa-img" src="images/icons/tick.png"><p class="pa">  ${view_paragraps[1]} </p>
        <img class="pa-img" src="images/icons/tick.png"><p class="pa">  ${view_paragraps[2]} </p>
        <img class="pa-img" src="images/icons/tick.png"><p class="pa">  ${view_paragraps[3]} </p>
        <img class="pa-img" src="images/icons/tick.png"><p class="pa">  ${view_paragraps[4]} </p>
        </div>
        <div class="paragaraph">
          
        <img class="pa-img" src="images/icons/tick.png"><p class="pa">  ${view_paragraps[5]} </p>
        <img class="pa-img" src="images/icons/tick.png"><p class="pa">  ${view_paragraps[6]} </p>
        <img class="pa-img" src="images/icons/tick.png"><p class="pa">  ${view_paragraps[7]} </p>
        <img class="pa-img" src="images/icons/tick.png"><p class="pa">  ${view_paragraps[8]} </p>
        </div>

    </div>
    `

    company.innerHTML = `
     <h6>${top_companies.title} </h6>
     <p> ${top_companies.paragraph} <a href="/#">Learn more </a></p>
    <div class="logos_area" style="display:flex; justify-content: space-around">
    <img class="logos" src="${top_companies.logos[0]}">
    <img class="logos" src="${top_companies.logos[1]}">
    <img class="logos" src="${top_companies.logos[2]}">
    <img class="logos" src="${top_companies.logos[3]}">
    <img class="logos" src="${top_companies.logos[4]}">
    </div>
    `
    const courseContent = document.getElementById('course_content');
    const { lessons, duration, lectures, accordion_titles, wraped_content } = course_content;
    
  
    courseContent.innerHTML = ` 
        <h2>Course content
 </h2>
 <span class="lesson">
 <span class="_lesson">${lessons}</span><span class="circle">.</span><span class="_lesson">${lectures} </span> <span class="circle">.</span><span class="_lesson">${duration} </span>
 </span>
    
 <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
       ${accordion_titles[0]};
      </button>
    </h2>
    
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
      <div class="accordion-body">

        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%="> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:40%="> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:40%="> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 


      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        ${accordion_titles[1]};
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
      
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 


      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        ${accordion_titles[2]};
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
       

    <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 

      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour"
      >
        ${accordion_titles[3]};
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
       
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseFive"
        aria-expanded="false"
        aria-controls="collapseFive"
      >
        ${accordion_titles[4]};
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseSix"
        aria-expanded="false"
        aria-controls="collapseSix"
      >
        ${accordion_titles[5]};
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
      <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p>  
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseSeven"
        aria-expanded="false"
        aria-controls="collapseSeven"
      >
        ${accordion_titles[6]};
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
       <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingEight">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseEight"
        aria-expanded="false"
        aria-controls="collapseEight"
      >
        ${accordion_titles[7]};
      </button>
    </h2>
    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingNine">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseNine"
        aria-expanded="false"
        aria-controls="collapseNine"
      >
        ${accordion_titles[8]};
      </button>
    </h2>
    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTen">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseTen"
        aria-expanded="false"
        aria-controls="collapseTen"
      >
        ${accordion_titles[9]};
      </button>
    </h2>
    <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
       <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingEleven">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseEleven"
        aria-expanded="false"
        aria-controls="collapseEleven"
      >
        ${accordion_titles[10]};
      </button>
    </h2>
    <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
       <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwelve">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseTwelve"
        aria-expanded="false"
        aria-controls="collapseTwelve"
      >
        ${accordion_titles[11]};
      </button>
    </h2>
    <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
       <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThirteen">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseThirteen"
        aria-expanded="false"
        aria-controls="collapseThirteen"
      >
        ${accordion_titles[12]};
      </button>
    </h2>
    <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-mdb-parent="#accordionExample">
      <div class="accordion-body">
       <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[0]} </span> <span class="text2" style="margin-left:60%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[1]} </span> <span class="text2" style="margin-left:72%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[2]} </span> <span class="text2" style="margin-left:61%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[3]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[4]} </span> <span class="text2" style="margin-left:69%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[5]} </span> <span class="text2" style="margin-left:73.5%"> preview</span> </p> 
        <p><img class="wrapped_img" src="images/icons/video.png">  <span class="text"> ${wraped_content[6]} </span> <span class="text2" style="margin-left:60.5%"> preview</span> </p> 
      </div>
    </div>
  </div>



</div>

`
    const requirementSection = document.getElementById(`requirement`);
    const { para1, para2,para3, para4, para5 } = requirements;
    requirementSection.innerHTML = `
    <h3>${requirements.title} </h3>
     <div class="para"> 
        <img src="images/icons/circle.png"><p class="para_text">  ${para1} </p>
     </div>
     <div class="para"> 
         <img src="images/icons/circle.png">
        <p class="para_text"> ${para2} </p>
     </div>
     <div class="para"> 
         <img src="images/icons/circle.png">
        <p class="para_text"> ${para3} </p>
     </div>
     <div class="para"> 
         <img src="images/icons/circle.png">
        <p class="para_text"> ${para4} </p>
     </div>
     <div class="para"> 
         <img src="images/icons/circle.png">
        <p class="para_text"> ${para5} </p>
     </div>
    `
  const { price,dsc  } = cart_content;

  cart_section.innerHTML = `
  <div style="
  background-image:url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width:100%;
  height: 30vh;
  class="cart_image"
  ">
  <img class="video_icon2" src="images/icons/video2.png">
  </div>
   <div className="body" style="padding:10px">
   
   <h3>Price${price}</h3>
   <div cla"buttons">
   <button  class="add_to_cart">Add To Cart</button> 
  
   <button  class="favorite"><img class="love" src="images/icons/love.png"> </button>
   </div>
   <a style="text-decoration: none;" href="/buy.html?id=${id}">
   <button class="buy" >Buy Now</button>
   </a>
   <h6 class="mt-3">${cart_content.title}</h6>
   <P>>${dsc[0]}</P>
   <P>>${dsc[1]}</P>
   <P>>${dsc[2]}</P>
   <P>>${dsc[3]}</P>
   <P>>${dsc[4]}</P>
   <P>>${dsc[5]}</P>
   </div>
   
  `
  const descripton_sec = document.getElementById('descripton_sec');
  descripton_sec.innerHTML = `
   <h3>${descripton.title} </h3>
   <p id="parax">${descripton.para}</p>
   <a id="see_more" style="text-decoration:underline">See More</a>
  
  `
  
  const element = document.getElementById('see_more');
  
  
  element.addEventListener('click', () => {
    const parax = document.getElementById('parax');
    parax.style.overflow = "visible";
    element.style.display = "none";
    parax.style.marginBottom = "200px";
  })
  const instructor_sec = document.getElementById('instructor');
  const { name, expertise, rating, reviews, coursers, img_url, details1, details2, details3 } = instructor[0];
  
  instructor_sec.innerHTML = `
  <h4>Instructor</h4>
  <p style="color:blue; text-decoration:underline">${name}</p>
  <p>${expertise}</p>
  <div class="img_c">
  <img style="border-radius:50%; width: 150px; height:150px" src="${img_url}">
  <div class="d">
    <p><i class="fa-solid fa-star"></i> ${rating}</p>
    <p><i class="bi bi-stars"></i> ${reviews}</p>
    <p><i class="fa-solid fa-address-card"></i> ${instructor[0].students}</p>
    <p><i class="fa-solid fa-video"></i> ${coursers}</p>
    </div>
    </div>
    <p class="my-3">${details1}</p>
    <p class="my-3">${details2}</p>
    <p class="my-3">${details3}</p>
  
  `


  const courses = [
    {
      id: 4,
      img: `images/courses/courses4.jpg`,
      description: `Ninja Writing: The Four Levels Of Writing Mastery`,
      author: `by Maximilian Schwarzmüller`
    },
    {
      id: 5,
      img: `images/courses/courses5.jpg`,
      description: `Wordpress for Beginners - Master Wordpress Quickly
`,
      author: `by Andrew Williams

`
    },
    {
      id: 6,
      img: `images/courses/courses6.jpg`,
      description: `Maya for Beginners: Complete Guide to 3D Animation`,
      author: `by Lucas Redly`
    }
  ]

  const coursesElement = document.getElementById('courses');

  for (course of courses) {
    const { img, description, author, id } = course;
    

    coursesElement.innerHTML += `
     <div class=" course">
                <a href="/details.html?id=${id}">
                <img style="width:100px, height:200px" src="${img}" alt="">
                <h5>${description} </h5>
                <p>${author} </p>
                </a>
                
            </div>
    
    `
  }

  
  
  
}

