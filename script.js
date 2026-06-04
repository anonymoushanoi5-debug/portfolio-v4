/* ===================================
   V4 PREMIUM PORTFOLIO
   APPLE + TESLA + EARTH LUXURY
=================================== */

/* ==========================
LOADER
========================== */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1800);

});


/* ==========================
TYPING EFFECT
========================== */

const typing =
document.getElementById("typing");

const text =
"PLC Mitsubishi • HMI • Servo • Automation Specialist";

let index = 0;

function typeWriter(){

    if(!typing) return;

    if(index < text.length){

        typing.innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typeWriter,50);

    }

}

setTimeout(typeWriter,1200);


/* ==========================
COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter(){

    counters.forEach(counter=>{

        const target =
        +counter.dataset.target;

        let count = 0;

        const speed =
        target / 80;

        function update(){

            count += speed;

            if(count < target){

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText =
                target + "+";

            }

        }

        update();

    });

}

window.addEventListener("scroll",()=>{

    const stats =
    document.querySelector(".stats");

    if(!stats || counterStarted) return;

    const top =
    stats.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        counterStarted = true;

        startCounter();

    }

});


/* ==========================
SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(

".story,\
.stat,\
.skill-item,\
.project-card,\
.contact-grid a,\
.section-title"

);

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>{

    el.style.opacity = "0";

    el.style.transform =
    "translateY(60px)";

    el.style.transition =
    "all .8s ease";

    observer.observe(el);

});


/* ==========================
PROJECT CARD 3D
========================== */

document
.querySelectorAll(".project-card")
.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateX =
        (y - rect.height/2)/15;

        const rotateY =
        (x - rect.width/2)/15;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
        `;

    });

});


/* ==========================
PARALLAX HERO
========================== */

const hero =
document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

    const scroll =
    window.scrollY;

    if(hero){

        hero.style.transform =
        `translateY(${scroll*0.12}px)`;

    }

});


/* ==========================
ACTIVE MENU
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top =
        section.offsetTop - 150;

        const height =
        section.offsetHeight;

        if(

            window.scrollY >= top &&
            window.scrollY < top + height

        ){

            current = section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href")
            === "#" + current

        ){

            link.classList.add("active");

        }

    });

});


/* ==========================
DARK MODE
========================== */

const toggle =
document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(

        document.body.classList.contains("dark")

    ){

        toggle.innerHTML = "🌙";

    }else{

        toggle.innerHTML = "☀️";

    }

});


/* ==========================
SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",(e)=>{

        e.preventDefault();

        const target =
        document.querySelector(
        anchor.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================
NAVBAR SHADOW
========================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    }else{

        navbar.style.boxShadow =
        "none";

    }

});


/* ==========================
SAVE THEME
========================== */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    toggle.innerHTML = "🌙";

}

toggle.addEventListener("click",()=>{

    if(

        document.body.classList.contains("dark")

    ){

        localStorage.setItem(
        "theme",
        "dark"
        );

    }else{

        localStorage.setItem(
        "theme",
        "light"
        );

    }

});


/* ==========================
CONSOLE
========================== */

console.log(
"%cNHS Portfolio V4 Loaded",
"color:#C9A227;font-size:18px;font-weight:bold;"
);