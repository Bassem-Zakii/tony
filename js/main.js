"use strict";

// navbar active links

const html = document.querySelector("html");
const subLinks = document.querySelectorAll("header nav .sublink");
const navlinks = document.querySelectorAll("header nav .link");
const navBtn = document.querySelector("header .nav-btn");
const navList = document.querySelector("header nav .links");

// toggle and add active class to navbar sublinks and his parent

subLinks.forEach((links) => {
  links.addEventListener("click", function (e) {
    e.preventDefault();
    subLinks.forEach((link) => link.classList.remove("active"));
    navlinks.forEach((link) => link.classList.remove("active"));
    doorsAnim();
    this.classList.add("active");
    this.parentNode.parentNode.classList.add("active");
  });
});

// main link preventDefault

const mainLinks = document.querySelectorAll("header nav .main-link");

for (let i = 0; i < mainLinks.length; i++) {
  const el = mainLinks[i];
  el.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

// the button for open and close navbar

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  if (navBtn.classList.contains("active")) {
    navList.classList.add("active");
  } else {
    navList.classList.remove("active");
  }
});

// remove active class from navbar and navbar button "close" when clicked outside it

html.addEventListener("click", (e) => {
  const header = e.target.closest("header");
  if (!header) {
    navBtn.classList.remove("active");
    navList.classList.remove("active");
  }
});

// logo

const navLogo = document.querySelector("header .logo a");

navLogo.addEventListener("click", (e) => {
  e.preventDefault();
  doorsAnim();
});

// carousel

const thumbnailsListWrap = document.querySelector(".thumbnails-wrap ul");

// // carousel data

const allData = [
  {
    id: 1,
    img: "content1.jpg",
    title: "Link 1",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! ",
  },
  {
    id: 2,
    img: "content2.jpg",
    title: "Link 2",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! ",
  },
  {
    id: 3,
    img: "content3.jpg",
    title: "Link 3",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! ",
  },
  {
    id: 4,
    img: "content4.jpg",
    title: "Link 4",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! ",
  },
  {
    id: 5,
    img: "content5.jpg",
    title: "Link 5",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit ",
  },
  {
    id: 6,
    img: "content6.jpg",
    title: "Link 6",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, ",
  },
  {
    id: 7,
    img: "content7.jpg",
    title: "Link 7",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi asperiores, placeat id! Perspiciatis, ",
  },
  {
    id: 8,
    img: "content8.png",
    title: "Link 8",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus facilis impedit error aperiam aut enim rerum ad ipsum, neque inventore eaque harum, optio nisi ",
  },
];

// dynamic data

for (const data of allData) {
  thumbnailsListWrap.innerHTML += `<li data-id="${data.id}">
  <img src="img/${data.img}" alt="${data.img}" draggable="false" />
  <span>${data.title}</span></li>`;
}

const thumbnailsFirstElement = document.querySelector(".thumbnails-wrap ul li");

thumbnailsFirstElement.classList.add("active");

// clone thumbnails item

let clones = [];

let thumbnailsList = [...document.querySelectorAll(".thumbnails-wrap ul li")];

thumbnailsList.forEach((list) => {
  let clone = list.cloneNode(true);
  clone.classList.add("clone");
  thumbnailsListWrap.appendChild(clone);
  clones.push(clone);
});

const thumbnailsAfterClone = document.querySelectorAll(
  ".thumbnails-wrap ul li"
);

const contentimg = document.querySelector(".carousel .content-box img");
const contentTitle = document.querySelector(".carousel .content-box h3");
const contentInfo = document.querySelector(".carousel .content-box p");
const doorLift = document.querySelector(".carousel .content-box .door-left");
const doorRight = document.querySelector(".carousel .content-box .door-right");

contentimg.setAttribute("src", `img/${allData[0].img}`);
contentimg.setAttribute("alt", allData[0].img);
contentTitle.textContent = allData[0].title;
contentInfo.textContent = allData[0].info;

thumbnailsAfterClone.forEach((lists) => {
  lists.addEventListener("click", function () {
    thumbnailsAfterClone.forEach((list) => {
      list.classList.remove("active");
    });

    this.classList.add("active");

    for (const data of allData) {
      if (
        this.classList.contains("active") &&
        this.getAttribute("data-id") == data.id
      ) {
        contentimg.setAttribute("src", `img/${data.img}`);
        contentimg.setAttribute("alt", data.img);
        contentTitle.textContent = data.title;
        contentInfo.textContent = data.info;
        doorsAnim();
      }
    }

    for (let i = 0; i < thumbnailsAfterClone.length; i++) {
      const el = thumbnailsAfterClone[i];
      if (
        this.classList.contains("active") &&
        this.getAttribute("data-id") === el.getAttribute("data-id")
      ) {
        el.classList.add("active");
      }
    }
  });
});

function doorsAnim() {
  contentimg.style.opacity = 0;
  contentTitle.style.opacity = 0;
  contentInfo.style.opacity = 0;
  setTimeout(() => {
    contentimg.style.opacity = 1;
    contentTitle.style.opacity = 1;
    contentInfo.style.opacity = 1;
    doorLift.classList.remove("active");
    doorRight.classList.remove("active");
  }, 800);

  doorLift.classList.add("active");
  doorRight.classList.add("active");
}
