let menu = () => {
  let disp = document.getElementsByTagName("header")[0];

  if (disp.style.display === "none" || disp.style.display === "") {
    disp.style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementsByClassName("close-button")[0].style.display =
      "inline-block";
  } else {
    disp.style.display = "none";
    document.getElementById("menu-icon").style.display = "block";
    document.getElementsByClassName("close-button")[0].style.display = "none";
  }
};
