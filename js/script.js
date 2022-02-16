let imgPlay = ["img/placeholder.jpg", "img/placeholder2.jpg","img/placeholder3.jpg","img/placeholder4.jpg", "img/placeholder5.jpg", "img/placeholder6.jpg", "img/placeholder7.jpg", "img/placeholder8.jpg"];
let whichImg = 0;
let image = document.querySelector("#marquee");
let image1 = document.querySelector("#marquee1");
let image2 = document.querySelector("#marquee2");

const nextImg = () =>{
  whichImg =( whichImg + 1 > imgPlay.length - 1) ? 0 : whichImg + 1;
  image.src = imgPlay[whichImg];
  
}
document.querySelector("#next").addEventListener("click", nextImg);
const nextImg1 = () =>{
  whichImg =( whichImg + 1 > imgPlay.length - 1) ? 0 : whichImg + 1;
  image1.src = imgPlay[whichImg];
 
}
document.querySelector("#next").addEventListener("click", nextImg1);
const nextImg2 = () =>{
  whichImg =( whichImg + 1 > imgPlay.length - 1) ? 0 : whichImg + 1;
  image2.src = imgPlay[whichImg];

}
document.querySelector("#next").addEventListener("click", nextImg2);

const preImg = () =>{
  whichImg--;
  if(whichImg < 0) whichImg = imgPlay.length - 1;
  image.src = imgPlay[whichImg];
}
document.querySelector("#previous").addEventListener("click", preImg);
const preImg1 = () =>{
  whichImg--;
  if(whichImg < 0) whichImg = imgPlay.length - 1;
  image1.src = imgPlay[whichImg];
}
document.querySelector("#previous").addEventListener("click", preImg1);
const preImg2 = () =>{
  whichImg--;
  if(whichImg < 0) whichImg = imgPlay.length - 1;
  image2.src = imgPlay[whichImg];
}
document.querySelector("#previous").addEventListener("click", preImg2);