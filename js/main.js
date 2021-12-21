document.addEventListener('DOMContentLoaded', () =>{
    const elementosCarousel = document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel, {
    duration: 100,
    dist: -90,
    shift: 5,
    paddinng: 10,
    numVisible: 3,
    
    
});

});