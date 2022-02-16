let imgPlay = ["img/placeholder.jpg", "img/placeholder2.jpg"];
let whichImg = 0;
let image = document.querySelector("#marquee");


const nextImg = () =>{
  whichImg =( whichImg + 1 > imgPlay.length - 1) ? 0 : whichImg + 1;
  image.src = imgPlay[whichImg];
  
}
document.querySelector("#next").addEventListener("click", nextImg);

const preImg = () =>{
  whichImg--;
  if(whichImg < 0) whichImg = imgPlay.length - 1;
  image.src = imgPlay[whichImg];
}
document.querySelector("#previous").addEventListener("click", preImg);