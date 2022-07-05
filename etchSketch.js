
let gridNumber=64;
let numberOfItems=gridNumber**2;
const gridContainer=document.querySelector('.container');

function addElements(numberOfItems)
{
    let expectedMeasurment=960/gridNumber;

    for(let i=1;i<=numberOfItems;i++)
{

const div=document.createElement('div');
div.classList.add('grid-div');
div.setAttribute('id',`${i}`);
div.style.width=`${expectedMeasurment}px`;
div.style.height=`${expectedMeasurment}px`;
gridContainer.appendChild(div);
}

}

function clearElements()
{
  while(gridContainer.firstChild)
  {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

addElements(numberOfItems);

/*function changeColor(e)
{
this.style.backgroundColor='orange';


}
*/

function activateButton(Class)
{
if(Class==='set') 
{
   /* numberOfItems=0;
    gridNumber=prompt('enter the grid measurements\n this button needs to adjust to delete old divs and create new divs');
    numberOfItems=gridNumber**2;
    console.log(gridNumber);
    grids.forEach(grid=>grid.classList.remove('hover'));
    clearElements();
    addElements(numberOfItems);
    console.log(numberOfItems);
*/
}

else if(Class==='clear')
{
    grids.forEach(grid=>grid.classList.remove('hover'));
}
}

const grids=document.querySelectorAll('.grid-div');
//grids.forEach(div=>console.log(div.getAttribute(id)));
grids.forEach(grid=>grid.addEventListener('mouseenter',()=>{
    grid.classList.add('hover');
}));

const buttons=document.querySelectorAll('button');
buttons.forEach(button=>button.addEventListener('click',()=>{
    activateButton(button.classList.value);
}));