window.addEventListener("scroll", (e) => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
  if (this.scrollY > 300) {
    console.log(this.scrollY);
    document.getElementById("firstTitle").classList.add("animate");
  } else {
    document.getElementById("firstTitle").classList.remove("animate");
  }
});
