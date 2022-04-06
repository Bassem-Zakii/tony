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

// slider

// // slider data

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

const contentimg = document.querySelector(
  ".slider .content-box .content-img img"
);
const contentTitle = document.querySelector(".slider .content-box h3");
const contentInfo = document.querySelector(".slider .content-box p");

const contentBox = document.querySelector(".slider .content-box .content-wrap");
const contentBoxList = document.querySelector(".slider .content-data");
const contentScroll = document.querySelector(
  ".slider .content-box .content-scroll"
);
const srcollHeight = document.querySelector(".slider .content-scroll span");

const doorLift = document.querySelector(".slider .content-box .door-left");
const doorRight = document.querySelector(".slider .content-box .door-right");

contentimg.setAttribute("src", `img/${allData[0].img}`);
contentimg.setAttribute("alt", allData[0].img);
contentTitle.textContent = allData[0].title;
contentInfo.textContent = allData[0].info;

contentScroll.scrollTo(0, 0);

window.addEventListener("load", () => {
  const contentBoxHeight = contentBoxList.offsetHeight;
  contentBox.style.height = contentBoxList.offsetHeight + "px";

  srcollHeight.style.height = contentBoxList.offsetHeight * 2 + "px";
  contentScroll.style.height = contentBoxList.offsetHeight + "px";

  if (window.innerWidth <= 768) {
    contentBoxList.style.height = contentBoxList.offsetHeight + "px";
  }

  // contentBoxList.style.height = contentBoxList.offsetHeight + "px";

  console.log(contentBox.offsetHeight + " content wrap");
  console.log(srcollHeight.offsetHeight + " span");
  console.log(contentScroll.offsetHeight + " content-scroll");
  console.log(contentBoxList.offsetHeight + " content-data");

  contentScroll.addEventListener("scroll", doScroll);
  window.addEventListener("resize", windowWidth);

  function windowWidth() {
    console.log(window.innerWidth);
    contentBox.style.height = contentBoxList.offsetHeight + "px";
    srcollHeight.style.height = contentBoxList.offsetHeight * 2 + "px";
    contentScroll.style.height = contentBoxList.offsetHeight + "px";
    // contentBoxList.style.height = contentBoxList.offsetHeight + "px";
    if (window.innerWidth <= 768) {
      contentBoxList.style.height = contentBoxList.offsetHeight + "px";
    }
  }

  function doScroll() {
    let scrolling = this.scrollTop;
    if (scrolling === 0) {
      console.log(scrolling);
      contentScroll.removeEventListener("scroll", doScroll);
      contentScroll.scrollTo(0, contentBoxHeight - 5);
      contentScroll.style.overflowY = "hidden";
      let last = allData.pop();
      allData.unshift(last);
      doorsAnim();
      console.log("up");

      setTimeout(function () {
        contentScroll.addEventListener("scroll", doScroll);
        contentScroll.style.overflowY = "auto";
        contentScroll.scrollTo(0, contentBoxHeight - 5);
        console.log("remove up");
      }, 2000);
    } else if (scrolling >= contentBoxHeight + 1) {
      console.log(scrolling);
      contentScroll.removeEventListener("scroll", doScroll);
      contentScroll.scrollTo(0, 5);
      contentScroll.style.overflowY = "hidden";
      const first = allData.shift();
      allData.push(first);
      doorsAnim();
      console.log("down");

      setTimeout(function () {
        contentScroll.addEventListener("scroll", doScroll);
        contentScroll.style.overflowY = "auto";
        contentScroll.scrollTo(0, 5);
        console.log("remove down");
      }, 2000);
    }

    contentimg.setAttribute("src", `img/${allData[0].img}`);
    contentimg.setAttribute("alt", allData[0].img);
    contentTitle.textContent = allData[0].title;
    contentInfo.textContent = allData[0].info;
  }

  // console.log(stopScroll);

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
});
