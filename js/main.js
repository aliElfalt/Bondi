// Logo Img
let logoImg = document.querySelector(".navbar-brand");

logoImg.onclick = () => {
  location.reload();
}

// Write Effect
let landingText = document.querySelector(".landing h1 span");
let cursor = document.querySelector(".cursor");
let landingTextContent = landingText.innerText;
landingText.innerText = "";

window.onload = () => {
  let i = 1;
  let interval = setInterval(() => {
    if (i > landingTextContent.length) {
      clearInterval(interval);
      cursor.style.display = "none";
    } else {
      landingText.innerText = landingTextContent.slice(0, i);
    }
    i++;
  }, 120);
}

// Nav links
let links = document.querySelectorAll(".nav-link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    links[i].classList.add("active");
    if (links[i].getAttribute("data-section") === ".navbar") {
      scrollTo({
        top: 0
      });
    } else {
      let section = document.querySelector(links[i].getAttribute("data-section"));
      section.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
  });
}

// Get Started Button
let getBtn = document.querySelector(".landing .main-btn");

getBtn.onclick = () => {
  let features = document.querySelector(".features");
  features.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

// Scroll To Top Button
let scrollToTop = document.querySelector(".scroll-to-top");

scrollToTop.onclick = () => {
  scrollTo({
    top: 0
  });
}

// On Scroll
window.onscroll = () => {
  // Scroll To Top Button
  if (scrollY >= 200) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

// Filter Buttons
let filterBtns = document.querySelectorAll(".filter li");
let imgsBoxs = document.querySelectorAll(".boxs > div");
let imgs = document.querySelectorAll(".boxs .box");

filterBtns.forEach(filterBtn => {
  filterBtn.addEventListener("click", () => {
    filterBtns.forEach(btn => {
      btn.classList.remove("active");
    });
    filterBtn.classList.add("active");
    if (filterBtn.getAttribute("data-image") === "All") {
      for (let i = 0; i < imgsBoxs.length; i++) {
        if (i >= 8) {
          imgsBoxs[i].style.display = "none";
        } else {
          imgsBoxs[i].style.display = "block";
        }
      }
    } else {
      for (let i = 0; i < imgsBoxs.length; i++) {
        if (imgs[i].getAttribute("data-image") === filterBtn.getAttribute("data-image")) {
          imgsBoxs[i].style.display = "block";
        } else {
          imgsBoxs[i].style.display = "none";
        }
      }
    }
  });
});

// show more Button
let showMoreBtn = document.querySelector(".show-more");

for (let i = 0; i < imgsBoxs.length; i++) {
  if (i >= 8) {
    imgsBoxs[i].style.display = "none";
  }
}

showMoreBtn.onclick = () => {
  if (showMoreBtn.classList.contains("show-more")) {
    for (let i = 0; i < imgsBoxs.length; i++) {
      imgsBoxs[i].style.display = "block";
    }
    showMoreBtn.classList.remove("show-more");
    showMoreBtn.classList.add("show-less");
    showMoreBtn.innerHTML = "Show Less";
  } else if (showMoreBtn.classList.contains("show-less")) {
    for (let i = 0; i < imgsBoxs.length; i++) {
      if (i >= 8) {
        imgsBoxs[i].style.display = "none";
      }
    }
    showMoreBtn.classList.remove("show-less");
    showMoreBtn.classList.add("show-more");
    showMoreBtn.innerHTML = "Show More";
  }
}