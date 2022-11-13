// Declaring a variable and tapping the class menu-icon
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

// Create a function that when clicking the hamburger, the class name 'move' on CSS will be toggle/capture
menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

const validate = () => {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", () => {
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
};

validate();

const sendmail = (nameValue, emailValue, msgValue) => {
  emailjs.send("service_j68rben", "template_1038nuh", {
    from_name: emailValue,
    to_name: nameValue,
    message: msgValue,
  });
};

const emptyerror = () => {
  swal({
    title: "Ooops..",
    text: "All fields should not be empty",
    icon: "error",
  });
};

const success = () => {
  swal({
    title: "Alright!",
    text: "Your message was sent, we will try to reach you ASAP",
    icon: "success",
  });
};

// Header background change on scroll
let header = document.querySelector("header");
// header-active class will be fire on scrolling vertically
window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll top icon change on scroll
let scrollTop = document.querySelector(".scroll-top");
// header-active class will be fire on scrolling vertically
window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
});
