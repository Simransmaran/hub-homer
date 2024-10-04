// bar
let menu_bar=document.querySelector("#menu_bar");
menu_bar.addEventListener("click",()=>{
    console.log(document.getElementById('mobile-navigation'));
    
    document.getElementById('mobile-navigation').classList.toggle('mobile-navigation-active')
})
//spaces transformed
function leftScroll(){
    let container=document.querySelector("#spaces-transformed");
    console.log("hi");
    
    container.scrollTo({
    top: 0,
    left:container.scrollLeft -200, 
    behavior: 'smooth'
   
});
}
function rightScroll(){
    let container=document.querySelector("#spaces-transformed");
    container.scrollTo({
    top: 0,
    left: container.scrollLeft +200, 
    behavior: 'smooth'
   
});
}
 //category 
 function categoryLeftScroll(){
    let container=document.querySelector("#category-tiles-group");
    container.scrollTo({
    top: 0,
    left:container.scrollLeft -200, 
    behavior: 'smooth'
    
});
}

function categoryRightScroll(){
    let container=document.querySelector("#category-tiles-group");
    container.scrollTo({
    top: 0,
    left: container.scrollLeft +200, 
    behavior: 'smooth'
   
  });
}
//  clients feedback
function feedbackLeftScroll(){
    let container=document.querySelector("#clients-feedback-card-group");
    container.scrollTo({
    top: 0,
    left:container.scrollLeft -200, 
    behavior: 'smooth'
    
 });
}

function feedbackRightScroll(){
    let container=document.querySelector("#clients-feedback-card-group");
    container.scrollTo({
    top: 0,
    left: container.scrollLeft +200, 
    behavior: 'smooth'
   
   });
 }
// footer
let quick = document.querySelectorAll('.Quick');
// console.log(quick)
for(let i = 0; i < quick.length; i++){
    let clicked = quick[i]
    clicked.addEventListener('click', () => {
        let quickList = clicked.nextElementSibling
        quickList.classList.toggle('active')

    })
}
