// for humburger
const humburger = document.querySelector('.hum');
const submenu = document.querySelector('.navigation');

humburger.addEventListener('click', () => {
   humburger.classList.toggle("change")
   submenu.classList.toggle("nav-change")
})

// for navbar

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 300){
        header.classList.add('scroll');

    }
    else{
        header.classList.remove('scroll');
    }
})

document.addEventListener('scroll', () => {
    const sevan = document.querySelector('.bg-sevan');

    if(window.scrollY > 4700) {
        sevan.classList.add('scroll-sevan');

    }
    else{
        sevan.classList.remove('scroll-sevan');
    }
})







// second slider
$('.second-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,    
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// third slider

const nexticon = '<img src="assets/images/right-arrow.png">'
const previcon = '<img src="assets/images/right-arrow.png">'


$('.slider-third').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        previcon,
        nexticon,
    ],
    autoplay: true,    
    autoplayTimeout: 4500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        },
         1200: {
            items: 3
         },
       
    }
})


// fourth slider
$('.slider-four').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    animateOut: 'fadeOut',
    autoplay: true,     
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


// five slider

$('.five-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


// slider main
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'fadeOut',
    autoplay: true,    
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


