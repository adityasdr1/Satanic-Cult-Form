window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".landing")?.classList.remove("hidden");
  }, 1200);
});
