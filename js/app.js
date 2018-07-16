const catImg = document.querySelector('.cat-img');
const clickCounter = document.querySelector('.click-count');

catImg.addEventListener("click", function(e){
    clickCounter.innerHTML = parseInt(clickCounter.innerHTML)+1;
});