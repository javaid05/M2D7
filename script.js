const newLink = function () {
  let navbar = document.querySelector(".nav");
  let navlink = document.createElement("a");
  navlink.classList = "p-2 text-muted";
  navlink.href = "#";
  navlink.innerText = "New Link";
  navbar.appendChild(navlink);
};
newLink();
