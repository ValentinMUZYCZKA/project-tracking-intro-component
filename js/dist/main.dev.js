"use strict";

var timeline = new TimelineMax();
var burgerOpen = false;
var menuBurgerElements = [].slice.call(document.getElementsByClassName('menu-nav__link'), 0);

if (window.matchMedia("(max-width: 400px)").matches) {
  document.getElementsByClassName("menu-nav__burger")[0].addEventListener('click', menuBurgerAnimation);
} else {
  timeline.to('body', 0.1, {
    display: 'block'
  }).from('.menu-nav__background', 0.6, {
    opacity: 0,
    y: -500,
    ease: Elastic.easeOut.config(0.8, 0.30)
  }).from('.menu-nav__logo', 0.6, {
    opacity: 0,
    x: -400,
    ease: Elastic.easeOut.config(0.8, 0.30)
  }, "-=0.3");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = menuBurgerElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var menuBurgerElement = _step.value;
      timeline.from(menuBurgerElement, 0.2, {
        opacity: 0,
        x: 200,
        ease: Elastic.easeOut.config(0.5, 0.60)
      }, "-=0.1");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  timeline.from('.section__image', 1, {
    opacity: 0,
    scale: 0,
    ease: Elastic.easeOut.config(0.7, 0.30)
  }, "-=0.2").from('.article__new', 0.5, {
    opacity: 0,
    fontSize: 0,
    ease: Elastic.easeOut.config(0.7, 0.80)
  }, "-=0.5").from('.article__hover-title', 0.6, {
    opacity: 0,
    y: 500,
    ease: Elastic.easeOut.config(0.2, 0.15)
  }, "-=0.2").from('.article__title', 0.6, {
    opacity: 0,
    x: 500,
    ease: Elastic.easeOut.config(0.2, 0.15)
  }, "-=0.2").from('.article__text', 0.6, {
    opacity: 0,
    y: 500,
    ease: Elastic.easeOut.config(0.2, 0.15)
  }).from('.btn-group__btn', 0.6, {
    opacity: 0,
    scale: 0,
    ease: Elastic.easeOut.config(0.2, 0.15)
  }, "-=0.3").from('.btn-group__info', 0.6, {
    opacity: 0,
    x: 500,
    ease: Elastic.easeOut.config(0.2, 0.25)
  });
}

function menuBurgerAnimation() {
  if (burgerOpen) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = menuBurgerElements.reverse()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var menuBurgerElement = _step2.value;
        timeline.to(menuBurgerElement, 0.2, {
          y: 200,
          ease: Elastic.easeOut.config(0.5, 0.80)
        }, "-=0.1");
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    timeline.to(".menu-nav__links", 0.2, {
      height: 0,
      ease: Power4.easeOut
    });
    timeline.to(".menu-nav__links", 0.1, {
      display: 'none'
    });
    menuBurgerElements.reverse();
    burgerOpen = false;
  } else {
    timeline.to(".menu-nav__links", 0.1, {
      display: 'block'
    });
    timeline.to(".menu-nav__links", 0.2, {
      height: "29%",
      ease: Power4.easeOut
    });
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = menuBurgerElements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var menuBurgerElement = _step3.value;
        timeline.to(menuBurgerElement, 0.2, {
          y: 0,
          ease: Elastic.easeOut.config(0.5, 0.60)
        }, "-=0.1");
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    burgerOpen = true;
  }
}