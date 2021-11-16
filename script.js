const newLink = function () {
  let navbar = document.querySelector(".nav");
  let navlink = document.createElement("a");
  navlink.classList = "p-2 text-muted";
  navlink.href = "#";
  navlink.innerText = "New Link";
  navbar.appendChild(navlink);
};
newLink();
// EX12) Write a function to change the color of the main title

const changeMainTItle = function () {
  const mainTitle = (document.querySelector("h1").style.color = "#a3a34a");
  // mainTitle.innerText = 'I Changed The Title'
  //const mainTitle = document.querySelector("h1");
  //mainTitle.style.color = "Red";
  // add paranthese when press Ctr+s
};

// EX13) Write a function to change the background of the jumbotron
const changeJumbotronBg = function () {
  const jumbotron = document.querySelector(".jumbotron");
  jumbotron.classList.remove("bg-dark");
  jumbotron.classList.add("bg-primary");
};
