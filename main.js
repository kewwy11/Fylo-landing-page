const body = document.querySelector('body')
const nav = document.querySelector('.nav')
const hero = document.querySelector('.hero')
const testimonials = document.querySelector('.testimonials')
const signUp = document.querySelector('.sign-up')
const footer = document.querySelector('footer')
const icon = document.querySelector('.mode')
const links = document.querySelectorAll('li')

icon.addEventListener('click', () => {
    body.classList.toggle('active')
    nav.classList.toggle('active')
    hero.classList.toggle('active')
    testimonials.classList.toggle('active')
    signUp.classList.toggle('active')
    footer.classList.toggle('active')
    icon.classList.toggle('active')
    links.classList.toggle('active')
    // links.forEach(link => link.classList.toggle('active'))

    if(icon.classList.contains('fa-sun')){
        icon.classList.replace('fa-sun','fa-moon')
    } else{
        icon.classList.replace('fa-moon', 'fa-sun')
    }
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(),
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})
