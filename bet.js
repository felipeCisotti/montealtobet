const h1 = document.querySelector("#refresh")

function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('open');
}

h1.addEventListener("click", () => {
    location.reload()
})

window.sr = ScrollReveal({ reset:true})
sr.reveal('.sport', {duration: 1000});
sr.reveal('.section-bg h2', {duration: 1000});
sr.reveal('.brazilian-league', {duration: 1000});
sr.reveal('#testemunhas', {duration: 1000});
sr.reveal('#faq', {duration: 1000});