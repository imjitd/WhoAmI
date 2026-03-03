// DARK MODE
function toggleMode(){
    document.body.classList.toggle("light");
    const icon=document.querySelector(".toggle");

    if(document.body.classList.contains("light")){
        icon.textContent="☀";
        localStorage.setItem("theme","light");
    }else{
        icon.textContent="🌙";
        localStorage.setItem("theme","dark");
    }
}

window.onload=function(){
    if(localStorage.getItem("theme")==="light"){
        document.body.classList.add("light");
        document.querySelector(".toggle").textContent="☀";
    }
    setActiveLink();
    revealOnScroll();
};

// ACTIVE LINK
function setActiveLink(){
    const links=document.querySelectorAll("nav a");
    links.forEach(link=>{
        if(link.href===window.location.href){
            link.classList.add("active");
        }
    });
}

// MOBILE MENU
function toggleMenu(){
    document.querySelector(".nav-links").classList.toggle("show");
}

// SCROLL REVEAL
function revealOnScroll(){
    const reveals=document.querySelectorAll(".section,.card,form");
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{threshold:0.1});

    reveals.forEach(el=>{
        el.classList.add("reveal");
        observer.observe(el);
    });
}

// EMAIL
function sendMail(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var location=document.getElementById("location").value;
    var message=document.getElementById("message").value;

    var body=`Name: ${name}%0D%0A
Age: ${age}%0D%0A
Location: ${location}%0D%0A
Message:%0D%0A${message}`;

    window.location.href=`mailto:imsoumyojit@gmail.com?subject=Website Contact&body=${body}`;
}