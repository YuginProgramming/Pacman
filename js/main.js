const pacman = document.querySelector('.pacman'); 
const cellButton = document.querySelector('.cellButton');
const arena = document.querySelector('.arena');
const canvaButton = document.querySelector('.submit');
let left = 0;

cellButton.addEventListener('click', (e) => {
   const field = document.createElement('div');
   field.className = 'cell_field';
   // pacman.insertAdjacentElement('beforeend', field);
   // arena.innerHTML = field;
   document.body.appendChild(field);
});

canvaButton.addEventListener('click', () => {
   makeGrid();
})

document.addEventListener('keydown', (event) => {
   if(event.key === 'ArrowRight' && left <= 300) {
         left += 85;
         pacman.style.left =`${left}px`;
      }
   else if(event.key === 'ArrowLeft' && left >= 85 ) { left -= 85;
       pacman.style.left =`${left}px`;
      }   
}
);

function makeGrid() {
   let tbl = document.getElementById('pixelCanvas');

   for (let i = 0; i < 6; i++) {
      let myRow = document.createElement('tr');
      myRow.id = 'raw' + i;

      tbl.appendChild(myRow);
      let rowW = document.getElementById('raw' + i);

      for (let j = 0; j < 6; j++) {
         let myCell = document.createElement('td');
         rowW.appendChild(myCell);
      }
   }
}
