const aboutLink = document.getElementById("about-link");
const educationLink = document.getElementById("education-link");
const aboutFooterLink = document.getElementById("about-link-footer");
const educationFooterLink = document.getElementById("speciality-link-footer");
const specialityLink = document.getElementById("speciality-link");
const contactsLink = document.getElementById("contacts-link");


// scroll to about
aboutLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior

  const element = document.getElementById("about-article");
  element.scrollIntoView({ behavior: "smooth" });
});

// scroll to education
educationLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior

  const element = document.getElementById("education-article");
  element.scrollIntoView({ behavior: "smooth" });
});

// scroll to speciality
specialityLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior

  const element = document.getElementById("speciality-article");
  element.scrollIntoView({ behavior: "smooth" });
});

// scroll to contacts
contactsLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior

  const element = document.getElementById("contacts-article");
  element.scrollIntoView({ behavior: "smooth" });
});

// scroll to about from footer
aboutFooterLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior

  const element = document.getElementById("about-article");
  element.scrollIntoView({ behavior: "smooth" });
});

// scroll to education from footer
educationFooterLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior

  const element = document.getElementById("education-article");
  element.scrollIntoView({ behavior: "smooth" });
});

const burgerMenu = document.getElementById("navbarMenu");
document.querySelectorAll('.navbar-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.navbar-item').forEach(item => item.classList.remove('is-active'));
    burgerMenu.classList.remove('is-active');
  });
});