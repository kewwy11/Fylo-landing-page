const body = document.querySelector('body')
const nav = document.querySelector('.nav')
const hero = document.querySelector('.hero')
const main = document.querySelector('.main')
const testimonials = document.querySelector('.testimonials')
const signUp = document.querySelector('.sign-up')
const footer = document.querySelector('footer')
const icon = document.querySelector('.mode')


icon.addEventListener('click', () => {
    body.classList.toggle('active')
    nav.classList.toggle('active')
    hero.classList.toggle('active')
    testimonials.classList.toggle('active')
    signUp.classList.toggle('active')
    footer.classList.toggle('active')
    icon.classList.toggle('active')
    main.classList.toggle('active')
    changeLogo()
    footerLogo()
    // links.forEach(link => link.classList.toggle('active'))

    if(icon.classList.contains('fa-sun')){
        icon.classList.replace('fa-sun','fa-moon')
    } else{
        icon.classList.replace('fa-moon', 'fa-sun')
    }
})

function changeLogo(){
    const img = document.getElementById('image')
    if(img.src.match('./fylo-dark-theme-landing-page-master/images/logo.svg')){
        img.src = 'fylologo2.png'
    }else{
        img.src = './fylo-dark-theme-landing-page-master/images/logo.svg'
    }
}

function footerLogo(){
    const img = document.getElementById('image2')
    if(img.src.match('./fylo-dark-theme-landing-page-master/images/logo.svg')){
        img.src = 'fylologo2.png'
    }else{
        img.src = './fylo-dark-theme-landing-page-master/images/logo.svg'
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(),
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})
