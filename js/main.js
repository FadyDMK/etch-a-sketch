
const container = document.querySelector('.container');

for (let i = 0; i < (16 * 16) -1; i++) {
    const item = document.createElement('div')
    item.classList.add('item');
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    });
    container.appendChild(item);

}



const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.backgroundColor = 'white';
    });
})



const btn = document.querySelector('.btn');

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

        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        });
        let dim = 350/number;
        let dimS = dim + 'px';
        item.style.height = dimS;
        item.style.width = dimS;
        container.appendChild(item);
    
    }
}