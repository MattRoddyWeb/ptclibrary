// Variables //

  let imgPlay = ["img/placeholder.jpg", "img/placeholder2.jpg","img/placeholder3.jpg","img/placeholder4.jpg", "img/placeholder5.jpg", "img/placeholder6.jpg", "img/placeholder7.jpg", "img/placeholder8.jpg"];

  let whichImg = 0;

  let clicked = 0;

  let image = document.querySelector("#marquee");
  let image1 = document.querySelector("#marquee1");
  let image2 = document.querySelector("#marquee2");

  let navbutton = document.querySelector(".nav__button");

  let navi = document.querySelector(".nav");

// Functions //

  const nextImg = () =>{
    whichImg =( whichImg + 1 > imgPlay.length - 1) ? 0 : whichImg + 1;
    image.src = imgPlay[whichImg];
    
  }
  const nextImg1 = () =>{
    whichImg =( whichImg + 1 > imgPlay.length - 1) ? 0 : whichImg + 1;
    image1.src = imgPlay[whichImg];
  
  }
  const nextImg2 = () =>{
    whichImg =( whichImg + 1 > imgPlay.length - 1) ? 0 : whichImg + 1;
    image2.src = imgPlay[whichImg];

  }

  const preImg = () =>{
    whichImg--;
    if(whichImg < 0) whichImg = imgPlay.length - 1;
    image.src = imgPlay[whichImg];
  }
  const preImg1 = () =>{
    whichImg--;
    if(whichImg < 0) whichImg = imgPlay.length - 1;
    image1.src = imgPlay[whichImg];
  }
  const preImg2 = () =>{
    whichImg--;
    if(whichImg < 0) whichImg = imgPlay.length - 1;
    image2.src = imgPlay[whichImg];
  }

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

  document.querySelector("#next").addEventListener("click", nextImg);
  document.querySelector("#next").addEventListener("click", nextImg1);
  document.querySelector("#next").addEventListener("click", nextImg2);

  document.querySelector("#previous").addEventListener("click", preImg);
  document.querySelector("#previous").addEventListener("click", preImg1);
  document.querySelector("#previous").addEventListener("click", preImg2);

  navbutton.addEventListener("click", navclicked);

  detectsize();