document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".view-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetDiv = document.getElementById(targetId);

      targetDiv.classList.toggle("hidden");
    });
  });
});
