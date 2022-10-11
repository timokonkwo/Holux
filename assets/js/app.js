/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== SWIPER FOR POPULAR SECTION ===============*/
const popularSectionSwiper = new Swiper(".popular__container", {
    spaceBetween: 60,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})



/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");

accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.value__accordion-header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector(".accordion-open");

        toggleItem(item);

        if (openItem && openItem !== item){
            toggleItem(openItem)
        }
    })

    const toggleItem = item => {
        const accordionContent = item.querySelector(".value__accordion-content");

        const arrIcon = item.querySelector('.value__accordion-arrow i');

        if (item.classList.contains('accordion-open')) {
            accordionContent.removeAttribute('style');
            item.classList.remove('accordion-open');
            
            arrIcon.classList.remove('open__item-icon');
            
        } else {
            accordionContent.style.height = accordionContent.scrollHeight + 'px';

            item.classList.add('accordion-open');

            arrIcon.classList.add('open__item-icon');
        }
    }
})



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
