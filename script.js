const core_features = [
    {
        id: 1,
        img: 'images/core/c1.png',
        name: "HTML5"
    },
    {
        "id": 2,
        "img": "images/core/c2.png",
        "name": "CSS3"
    },
    {
        "id": 3,
        "img": "images/core/c3.png",
        "name": "SASS"
    },
    {
        "id": 4,
        "img": "images/core/c4.png",
        "name": "Bootstrap (Latest)"
    },
    {
        "id": 5,
        "img": "images/core/c5.png",
        "name": "Zoom Integration"
    },
    {
        "id": 6,
        "img": "images/core/c6.png",
        "name": "SEO Optimized"
    },
    {
        "id": 7,
        "img": "images/core/c7.png",
        "name": "eCommerce "
    },
    {
        "id": 8,
        "img": "images/core/c8.png",
        "name": "Speed Performance"
    },
    {
        "id": 9,
        "img": "images/core/c9.png",
        "name": "Swiper Slider"
    },
    {
        "id": 10,
        "img": "images/core/c10.png",
        "name": "Google Fonts"
    },
    {
        "id": 11,
        "img": "images/core/c11.png",
        "name": "Light/Dark Ready"
    },
    {
        "id": 12,
        "img": "images/core/c12.png",
        "name": "Animation"
    },
    {
        "id": 13,
        "img": "images/core/c13.png",
        "name": "Icofont"
    },
    {
        "id": 14,
        "img": "images/core/c14.png",
        "name": "Smooth Effects"
    },
    {
        "id": 15,
        "img": "images/core/c15.png",
        "name": "Responsive Layouts"
    },
    {
        "id": 16,
        "img": "images/core/c16.png",
        "name": "Browser Compatibility "
    },
    {
        "id": 17,
        "img": "images/core/c17.png",
        "name": "Developer Friendly "
    },
    {
        "id": 18,
        "img": "images/core/c18.png",
        "name": "Quick Support"
    },
    {
        "id": 19,
        "img": "images/core/c19.png",
        "name": "Well Documented"
    },
    {
        "id": 20,
        "img": "images/core/c20.png",
        "name": "Lifetime Updates"
    }
]
const core_cards = document.getElementById('core_cards');
// console.log(core_cards)

for (card of core_features) {
    
    const {img, name} = card;
    
    core_cards.innerHTML += `

<div class="single_cards">
                    <div class="inner mb-3">
                        <div class="icon  d-block">
                            <img src="${img}" alt="">
                        </div>
                    </div>
                    <h6 class="title"> ${name} </h6>
                   </div>

`
}


// accordion
let acc = document.getElementsByClassName("accordion");
let i;
const plusOrMinus = document.getElementsByClassName('plus');
// console.log(plusOrMinus)

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        
        /* Toggle between hiding and showing the active panel */
        const panel = this.nextElementSibling;
       
        for (span of plusOrMinus) {
            if (panel.style.display === "block") {
                span.innerHTML = `<p> + </p>`
            } else {
                span.innerHTML =`<p> − </p>`
            }
        }

        if (panel.style.display === "none") {
            panel.style.display = "block";
            

            plusOrMinus.innerHTML = `<p>+</p>`;
        } else {
            panel.style.display = "none";
        }
    });
}