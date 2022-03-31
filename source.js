const body = document.querySelector("body");
const content = document.querySelector(".content");
const activeProgram = document.querySelector(".active");
const close = document.querySelector("#close");
const reduce = document.querySelector("#reduce");
const expand = document.querySelector("#expand");
const program = document.querySelector("#program1");
const lefttopwindow = document.querySelector(".lefttopwindow");

let fasolid = "fa-solid";
let FAWexpand = "fa-plus";
let windowHeight = content.style.height = "calc(100vh - 300px)";
let windowWidth = content.style.width = "calc(100vw - 300px)";

lefttopwindow.addEventListener("mouseover", function () {
  close.classList.add(fasolid, "fa-xmark");
  reduce.classList.add(fasolid, "fa-angle-down");
  expand.classList.add(fasolid, FAWexpand);
});

lefttopwindow.addEventListener("mouseout", function () {
  close.classList.remove(fasolid, "fa-xmark");
  reduce.classList.remove(fasolid, "fa-angle-down");
  expand.classList.remove(fasolid, FAWexpand);
});

close.addEventListener("click", function () {
  content.style.display = "none";
  activeProgram.style.display = "none";
});

reduce.addEventListener("click", function () {
  content.style.display = "none";
});

expand.addEventListener("click", function () {
  content.classList.toggle("noradius");
  content.style.marginTop = "100px";
  if ((content.style.height != "100vh")) {
    content.style.marginTop = "0px";
    windowHeight = content.style.height = "100vh";
    windowWidth = content.style.width = "100vw";
    expand.classList.remove(fasolid, FAWexpand);
    FAWexpand = "fa-compress";
  } else {
    windowHeight = (content.style.height = "calc(100vh - 300px)");
    windowWidth = content.style.width = "calc(100vw - 300px)";
    expand.classList.remove(fasolid, FAWpand);
    FAWexpand = "fa-plus";
  }
});

program.addEventListener("click", function () {
  console.log("ok")
  if (content.classList.contains("noradius")) {
      content.classList.toggle("noradius");
  };
  windowHeight = content.style.height = "calc(100vh - 300px)";
  windowWidth = content.style.width = "calc(100vw - 300px)";
  content.style.marginTop = "100px";
  activeProgram.style.display = "initial";
  content.style.display = "initial";
});

// .addEventListener("contextmenu", function (e) {
//   document.querySelector(".content").style.display = "initial";
//   // e.preventDefault();
// });
