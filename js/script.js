// Variables //


  let clicked = 0;
  let navbutton = document.querySelector(".nav__button");

  let navi = document.querySelector(".nav");

// Functions //

 

  const navclicked = () => {

    switch (clicked) {

      case 0:

        navi.className = "nav nav--main-nav visible";

        clicked = 1;

        break;

      case 1:

        navi.className = "nav nav--main-nav invisible";

        clicked = 0;

        break;

    }

  }

  const detectsize = () => {

    if (window.innerWidth >= 768) {

      navi.className = "nav nav--main-nav visible";

    }

  }
 

// Query Selectors //

  

  navbutton.addEventListener("click", navclicked);

  detectsize();



