const h1 = document.querySelector("#refresh")

h1.addEventListener("click", () => {
    location.reload()
})

function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('open');
}