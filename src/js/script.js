const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const toTop = document.querySelector('#to-top');
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});
window.onscroll = function (){
    const header = document.querySelector('header');
const fixNav = header.offsetTop ;
if(window.pageYOffset > fixNav){
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');

} else{
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
}
};


 let sliderContainer = document.getElementById('sliderContainer');
 let slider = document.getElementById('slider');
 let cards = slider.getElementsByTagName('li');

  let elementsToShow =3;
  if(document.body.clientWidth<1000){
    elementsToShow =1;
  }else if(document.body.clientWidth<1500){
    elementsToShow =2;
  }
 let sliderContainerWidth = sliderContainer.clientWidth;

 let cardWidth = sliderContainerWidth/elementsToShow;

 slider.style.width = cards.length*cardWidth+'px';
 slider.style.transition ='margin';
 slider.style.transitionDuration ='1s';

for( let index = 0; index < cards.lenght; index++){
      const element = cards[index]; 
     element.style.width = cardWidth+'px';
 }
 function prev(){
   
    if(+slider.style.marginLeft.slice(0,-2) != -cardWidth*  (cards.lenght - elementsToShow) )
 slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) - cardWidth)+'px' ;
 }
 function next(){
    if(+slider.style.marginLeft.slice(0,-2)  != 0)
     slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) + cardWidth)+'px' ;
 }
 window.addEventListener('click',function(e){
if(e.target != hamburger && e.target != navMenu){
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');

}
 });