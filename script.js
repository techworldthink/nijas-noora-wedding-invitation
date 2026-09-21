const openButton = document.getElementById("openInvite");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");

openButton.addEventListener("click", () => {
  opening.animate(
    [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(1.03)" }
    ],
    { duration: 650, easing: "ease", fill: "forwards" }
  );

  setTimeout(() => {
    opening.style.display = "none";
    invitation.classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 580);
});
