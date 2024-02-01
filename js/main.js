const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const reset = document.querySelector('.reset');



newGrid(16);


reset.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.backgroundColor = 'white';
    });
})





btn.addEventListener('click', () => {
    let width = Number(prompt('How many squares per side (e.g. 16 to get 16x16 grid): '));
    if (width>0 && width<=100){
        removeGrid();
        newGrid(width);
    }

})

function removeGrid() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.remove();
    });
}

function newGrid(number) {
    for (let i = 0; i < (number * number) ; i++) {
        const item = document.createElement('div')
        item.classList.add('item');

        let rndRed = Math.floor(Math.random()*255);
        let rndBlue = Math.floor(Math.random()*255);
        let rndYellow = Math.floor(Math.random()*255);

        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgb(' + rndRed +','+rndBlue+','+ rndYellow+')';
        });
        let dim = 100/number;
        let dimS = dim + '%';
        item.style.height = dimS;
        item.style.width = dimS;
        container.appendChild(item);
    
    }
}