const mainMenuButton = document.getElementById("btnMainMenu");

mainMenuButton.addEventListener("click", (event) => {
    const navHeader = document.getElementById("navMenuSide");
    navHeader.classList.toggle("d-none");
})