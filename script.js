/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*scroll sections active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll=() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });

    /* sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY >100);

    /* remove toggle icon and navbar when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*scroll reveal */ 
ScrollReveal({
     //reset: true ,
     distance:'80px',
     duration:2000,
     delay:200
});   

ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.skills-container,.portfolio-box,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });


var type = new Typed(".multiple-text", {
    strings:["IT Student", "BigData Lover"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var subject = document.getElementById("emSub").value;
  
    if (name.trim() === "") {
      alert("Please enter your full name.");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email address.");
      return false;
    }
  
    if (mobile.trim() === "") {
      alert("Please enter your mobile number.");
      return false;
    }
  
    if (subject.trim() === "") {
      alert("Please enter the email subject.");
      return false;
    }

  
    return true;
  };


  var readMoreBtn = document.getElementById("read-more-btn");
  var popupContainer = document.getElementById("popup-container");
  
  readMoreBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
  
    popupContainer.style.display = "block";
  });
  
  popupContainer.addEventListener("click", function() {
    popupContainer.style.display = "none";
  });

  var readMoreBtn1 = document.getElementById("read-more-btn-1");
  var popupContainer1 = document.getElementById("popup-container-1");
  
  readMoreBtn1.addEventListener("click", function(event) {
      event.preventDefault();
      popupContainer1.style.display = "block";
  });
  
  popupContainer1.addEventListener("click", function() {
      popupContainer1.style.display = "none";
  });
  
  var readMoreBtn2 = document.getElementById("read-more-btn-2");
  var popupContainer2 = document.getElementById("popup-container-2");
  
  readMoreBtn2.addEventListener("click", function(event) {
      event.preventDefault();
      popupContainer2.style.display = "block";
  });
  
  popupContainer2.addEventListener("click", function() {
      popupContainer2.style.display = "none";
  });
  
  var readMoreBtn3 = document.getElementById("read-more-btn-3");
  var popupContainer3 = document.getElementById("popup-container-3");
  
  readMoreBtn3.addEventListener("click", function(event) {
      event.preventDefault();
      popupContainer3.style.display = "block";
  });
  
  popupContainer3.addEventListener("click", function() {
    popupContainer3.style.display = "none";
});
  
  
  
  
  


  
  

 
  