
var timeline = new TimelineMax();
var burgerOpen = false;
var menuBurgerElements = [].slice.call(document.getElementsByClassName('menu-nav__link'), 0)

if (window.matchMedia("(max-width: 400px)").matches) {
    document.getElementsByClassName("menu-nav__burger")[0].addEventListener('click', menuBurgerAnimation);
}else{
    timeline.from('.menu-nav__background',0.6,{opacity: 0, y:-500,  ease:Elastic.easeOut.config( 0.8,0.30)})
            .from('.menu-nav__logo',0.6,{opacity: 0, x:-400,ease:Elastic.easeOut.config( 0.8,0.30)},"-=0.3")
           
    for (const menuBurgerElement of menuBurgerElements) {
        timeline.from(menuBurgerElement, 0.2,{opacity: 0,x:200 , ease:Elastic.easeOut.config( 0.5,0.60)},"-=0.1")
    }

    timeline.from('.section__image',1,{opacity: 0, scale: 0,ease:Elastic.easeOut.config( 0.7,0.30)},"-=0.2")
            .from('.article__new',0.5,{opacity : 0,fontSize: 0, ease:Elastic.easeOut.config( 0.7,0.80)},"-=0.5")
            .from('.article__hover-title',0.6,{opacity: 0, y : 500, ease:Elastic.easeOut.config( 0.2,0.15)},"-=0.2")
            .from('.article__title',0.6,{opacity: 0, x : 500, ease:Elastic.easeOut.config( 0.2,0.15)},"-=0.2")
            .from('.article__text',0.6,{opacity: 0, y : 500, ease:Elastic.easeOut.config( 0.2,0.15)})
            .from('.btn-group__btn',0.6,{opacity: 0, scale: 0, ease:Elastic.easeOut.config( 0.2,0.15)},"-=0.3")
            .from('.btn-group__info',0.6,{opacity: 0, x : 500, ease:Elastic.easeOut.config( 0.2,0.25)})

        }

function menuBurgerAnimation(){

    if (burgerOpen) {
        for (var menuBurgerElement of menuBurgerElements.reverse()) {
            timeline.to(menuBurgerElement, 0.2,{y:200, ease:Elastic.easeOut.config( 0.5,0.80)},"-=0.1") 
        }
        timeline.to(".menu-nav__links",0.2,{height: 0, ease:Power4. easeOut})
        timeline.to(".menu-nav__links",0.1,{display: 'none'})
        menuBurgerElements.reverse()
        burgerOpen= false;
       
    }else{
        timeline.to(".menu-nav__links",0.1,{display: 'block'})
        timeline.to(".menu-nav__links",0.2,{height: "29%", ease:Power4. easeOut})
        for (var menuBurgerElement of menuBurgerElements) {
            timeline.to(menuBurgerElement, 0.2,{y:0 , ease:Elastic.easeOut.config( 0.5,0.60)},"-=0.1") 
        }
        burgerOpen = true;
    }
}


