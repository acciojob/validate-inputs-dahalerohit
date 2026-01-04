//your JS code here. If required.
let form = document.querySelector("form");

let name_box = document.querySelector("#name");
let email_box = document.querySelector("#email");
let phone_box = document.querySelector("#phone");

const namePattern = /^[A-Za-z]{3,}$/;
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const phonePattern = /^[0-9]{10}$/;


name_box.addEventListener("input", () => {
  if (namePattern.test(name_box.value)) {
    name_box.style.backgroundColor = "lightgreen";
  } else {
    name_box.style.backgroundColor = "pink";
  }
});


email_box.addEventListener("input", () => {
  if (emailPattern.test(email_box.value)) {
    email_box.style.backgroundColor = "lightgreen";
  } else {
    email_box.style.backgroundColor = "pink";
  }
});


phone_box.addEventListener("input", () => {
  if (phonePattern.test(phone_box.value)) {
    phone_box.style.backgroundColor = "lightgreen";
  } else {
    phone_box.style.backgroundColor = "pink";
  }
});
