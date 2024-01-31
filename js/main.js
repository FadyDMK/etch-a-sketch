
const container = document.querySelector('.container');

for (let i = 0; i < (16 * 16) - 1; i++) {
    const item = document.createElement('div')
    item.classList.add('item');
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    });
    container.appendChild(item);

}




const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let width = prompt('How many squares per side (e.g. 16): ');
    newGrid(number);
})


function removeGrid() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.remove();
    });
}

function newGrid(number) {
    console.log('test');
    removeGrid();
}