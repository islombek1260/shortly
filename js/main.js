let elBtn = document.querySelector(".header-nav__btn")
let siteNav = document.querySelector(".header-nav__box")

elBtn.addEventListener("click", ()=> {
    siteNav.classList.toggle("active")
})