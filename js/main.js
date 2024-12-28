document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    width: '100%',
    perMove: 1,
    gap: 16,
    autoplay: true,
    breakpoints: {
      768: {
        perPage: 2,
      },
      500: {
        perPage: 1,
      },
    }
  });
  splide.mount();
});

function activeLink(item = null) {
  var current = document.querySelector(".active");
  if (current) {
    current.classList.remove("active");
  }
  if (item == null)
    this.classList.add('active');
  else
    item.classList.add('active');
}

var navItems = document.getElementsByClassName("nav-link");
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", activeLink)
}

var sections = document.querySelectorAll(".section");
window.onscroll = () => {
  for (var j = 0; j < sections.length; j++) {
    let top = window.scrollY;
    let offset = sections[j].offsetTop;
    let height = sections[j].offsetHeight;
    console.log("catch");
    if (top >= offset - 100 && top < offset + height) {
      activeLink(navItems[j]);
    }
  }
};


var submit = document.getElementById("submit");
submit.addEventListener("click", function (evt) {

  var email = document.querySelector("#email");
  var comment = document.querySelector("#comment");
  var error = document.querySelector("#error");
  var err = "";
  if (comment.value.length < 1) {
    err = "Please add a comment"
  }
  if (email.value.length < 5) {
    err = "Please insert a valid email";
  }
  error.innerHTML = err;

})