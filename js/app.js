const catClicker = document.getElementById('cat-clicker');

const cats = [
    { name : 'Cleo',
      clickCount : 0,
      altText : 'Photo of kitten Cleo with her siblings',
      img : 'img/q-aila-162475-unsplash.jpg'},
      { name : 'Clyde',
      clickCount : 0,
      altText : 'Photo of Clyde being lazy on the arm of a couch',
      img : 'img/sabri-tuzcu-213760-unsplash.jpg'},
];

const catList = document.querySelector('aside .list-of-cats');
for (let cat of cats) {
    catList.innerHTML += `<li class='cat-item'>${cat.name}</li>`
}

for (let cat of cats) {
    let catEntry = document.createElement('div');
    catEntry.innerHTML =  `
            <div class='entry-body'>
                <img src='${cat.img}' class='cat-img' alt='${cat.altText}'/>
                <h2 class='cat-name'>${cat.name}</h2>
            </div> <!-- .entry-body -->
            <h2>Clicked: <span class="click-count">${cat.clickCount}</span>
    
    `;
    catEntry.classList.add('cat-entry');
    console.log(catEntry);
    catEntry.addEventListener("click", function(e) {
        let counter = this.querySelector('.click-count');
        counter.innerHTML = parseInt(counter.innerHTML)+1;
        
    });
    catClicker.appendChild(catEntry);
}
