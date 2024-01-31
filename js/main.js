
const container = document.querySelector('.container');

for (let i = 0; i < (16 * 16) - 1; i++) {
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
    let width = Number(prompt('How many squares per side (e.g. 16): '));
    if(width == NaN){console.log('pp')}

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