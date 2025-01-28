function toggleMenu() {
    const menu = document.querySelector("ul");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"; // Show menu
    } else {
        menu.style.display = "none"; // Hide menu
    }
}
